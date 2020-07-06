const router = require("express").Router();
const { Item, User, Bid, Comment } = require("../models");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { route } = require("./userRoutes");


// returns all items signed in or not
router.post("/items/category", (req, res) => {
 
  let info = req.body
  let limit = 12
  console.log(info)
  let skip = (info.page) * 12
  if(req.body.category === 'All' )
  {
   
    Item.find({isBought : false }, null , {limit: limit, skip: skip})
    .populate("user")
    .then((items) => {
      Item.countDocuments().exec(function(err, count) {
        res.json({
          items : items,
          count :count
        }) 
        })
   

    })
    .catch((err) => console.error(err));
  }
  else
  {
    Item.find({isBought : false, category : req.body.category}, null , {limit: limit, skip: skip})
    .populate("user")
    .then((items) => 
    {
      Item.countDocuments().exec(function(err, count) {
        res.json({
          items : items,
          count :count
        }) 
        })
    })
    .catch((err) => console.error(err));
  }
 
});


// returns all items signed in or not
router.get("/items/:id",passport.authenticate("jwt"), (req, res) => {
  Item.find({_id : req.params.id})
    .populate(["user"])
    .populate({ 
      path: 'bid',
      populate: {
        path: 'user',
        model: 'User'
      } 
   })
   .populate({ 
    path: 'comment',
    populate: {
      path: 'user',
      model: 'User'
    } 
 })
    .then((item) => 
    {
 
      if(JSON.stringify(req.user._id) === JSON.stringify(item[0].user._id))
      {
        item.push({isUserItem : true})
      }
      else
      {
        item.push({isUserItem : false})
      }
      console.log(item)
      res.json(item)
    }
    )
    .catch((err) => console.error(err));
});

router.get('/items/search/:search', (req, res)=>
{
  Item.find({$and :
  [
    {$or : [ 
      { title: {$regex : new RegExp(req.params.search, 'i')}}, 
      { category: {$regex :  new RegExp(req.params.search, 'i')}},
      { keywords: {$regex :  new RegExp(req.params.search, 'i')}}
    ]},
    { isBought : false }
  ]}
  
  )
  .then(data => res.json(data))
  .catch(err => console.error(err))
})

// creating new item for sale
router.post("/items", passport.authenticate("jwt"), async (req, res) => {

  let path = []
  const url = req.protocol + '://' + req.get('host')
  if (req.files) {
  const file = req.files.imgCollection
   for(let i = 0; i < file.length; i++ )
  {
     await (file.length?file[i]:file).mv(
      `./client/public/images/` + (file.length?file[i]:file).name.split(' ').join('_'),
        (err) => {
        if (err) {
          console.log('failed to upload')
        } else {
          isImage = true;
        }
      }
    ); 
     path.push(`/images/` + file[i].name)
  }
}

  req.body['photos'] = path
  req.body['user'] = req.user._id

  Item.create(req.body)
    .then((item) => {
      User.findByIdAndUpdate(req.user._id, { $push: { sellItems: item._id } })
        .then(() =>
          res.json(req.body)
        )
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
});

// update created auction item
// router.put('/items/:id', passport.authenticate("jwt"), (req, res) => {
//   Item.findByIdAndUpdate(req.params.id, { $set: req.body })
//     .then(data => res.json(data))
//     .catch(err => console.error(err))
// })

// // delete item by id
// router.delete('/items/:id', passport.authenticate("jwt"), (req, res) => {
//   Item.findByIdAndRemove(req.params.id)
//     .then(data => res.json(data))
//     .catch(err => console.error(err))
// })


// create new bid on item
router.post("/item/bid", passport.authenticate("jwt"), async (req, res) => {

  let path = []
  const url = req.protocol + '://' + req.get('host')
  if (req.files) {
  const file = req.files.imgCollection
  const length = file.length || 1
   for(let i = 0; i < length; i++ )
  {
     await (file.length?file[i]:file).mv(
      `./client/public/images/` + (file.length?file[i]:file).name.split(' ').join('_'),
        (err) => {
        if (err) {
          console.log('failed to upload')
        } else {
        
          isImage = true;
        }
      }
    ); 
     path.push(`/public/images/` + (file.length?file[i]:file).name.split(' ').join('_'))
  }
}


const newBid = {
  price: req.body.price,
  description: req.body.description,
  user: req.user._id,
  item: req.body.postId,
  photos : path
};

  Bid.create(newBid)
    .then((bid) => {
      console.log('bid')
      Item.findByIdAndUpdate(req.body.postId, { $push: { bid: bid._id } })
        .then(() => {
              User.findByIdAndUpdate(req.user._id,
                { 
                  $addToSet: { buyItems: req.body.postId },
                  $pull : { watchItems : req.body.postId}
                })
              .then(data => {
                res.json(data)
              })
              .catch(err => console.error(err))
            
        })
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})

// create new comment on item
router.post("/comments", passport.authenticate("jwt"), (req, res) => {
  const newComment = {
    body: req.body.body,
    user: req.user._id,
    item: req.body.item
  }
  Comment.create(newComment)
    .then((comment) => {
      Item.findByIdAndUpdate(req.body.item, { $push: { comment: comment._id } })
        .then(() => res.json(newComment))
        .catch((err) => console.error(err))
    })
    .catch((err) => console.error(err))
})


// watch on item
router.put("/item/watch", passport.authenticate("jwt"), (req, res) => {
   User.findByIdAndUpdate(req.user._id,{$addToSet : {watchItems : req.body.postId}},  (err, data) => 
  {
  if(err)console.error(err)
   res.sendStatus(200)
  }
  )
})

// sold item 
router.put('/item/sold', passport.authenticate("jwt"), (req,res)=>
{
      
      const newBid = {
        price : req.body.price,
        description : 'Bought out'
      }
  
      Bid.create(newBid)
      .then(({_id}) =>
        {
      
          Item.findByIdAndUpdate(req.body.postId, {$set : { topBid : _id}})
          .populate('user')
          .then(({user}) => {
            User.findByIdAndUpdate(req.user._id,         
            {
              $addToSet : { boughtItems : req.body.postId},
              $pull : { buyItems : req.body.postId}
            })
            .then(()=> 
            {
              User.findByIdAndUpdate(user._id,         
                {
                  $addToSet : { soldItems : req.body.postId},
                  $pull : { sellItems : req.body.postId}
                })
                .then(data => 
                  {
                    User.updateMany({},{
                     
                        $pull : { watchItems: req.body.postId },
                        $pull : { buyItems: req.body.postId },
                       })
                      .then(()=>
                      {
                        res.sendStatus(200)
                      })
                      .catch(err => console.error(err))
                  })
                .catch(err => console.error(err))
            })
            .catch(err => console.error(err))
          })
          .catch(err => console.error(err))
        })
        .catch(err => console.error(err))

})

router.put('/item/ship', passport.authenticate("jwt"), (req, res) =>
{
    User.findByIdAndUpdate(req.user._id,  {
      $addToSet : { shipItems : req.body.postId},
      $pull : { soldItems : req.body.postId}
    })
    .then(()=> res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router


