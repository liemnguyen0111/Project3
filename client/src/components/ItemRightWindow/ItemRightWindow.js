import React from 'react';
import BottomNav from './BottomNav'
import BidSection from './BidSection'
import ChatSection from './ChatSection'
import TopNav from './TopNav'


export default function ItemRightWindow() {

  const [value, setValue] = React.useState(0);

  return (
   <>
   {/* <TopNav></TopNav>
   {value? <ChatSection/> : <BidSection/> }  */}
   <BottomNav value={value} setValue={setValue} />
   </>
  );
}