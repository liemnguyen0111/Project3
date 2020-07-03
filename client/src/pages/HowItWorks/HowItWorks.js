import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingBottom : '70px'
  },
  title: {
    textAlign: 'center',
    color: '#616161',
    fontWeight: '300',
    fontSize: '40px',
    borderTop: '1px solid gray',
    borderBottom: '1px solid gray',
    marginTop: '10px',
    padding: '5px',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: 'gray',
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Create an Account', 'Find Items to Buy', 'Watch, Bid, Buy Items', 'Check Items You are Watching or Bid On', 'Sell Items'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Click the "SIGN UP" button on the homepage to create an account.`;
    case 1:
      return 'Use the search and/or category filters to find items you like.';
    case 2:
      return `Click on an item to see its details. On the details page, click the "WATCH" button to save an item you're watching, click the "BID" button to make an offer to the seller, or click the "BUY" button to buy the item immediately.`;
    case 3:
      return `Click on the menu icon, then click "Watching" to see items you're watching or bid on. You'll be alerted if you win an item you've bid on.`;
    case 4:
      return `Click on the menu icon, then click "Selling" to post items for sale and to see items you're selling. On the detail page of any items you're selling you can receive and accept bids, and answer buyer questions about the item. You'll be alerted if a buyer purchases any of the items you're selling.`;
    default:
      return 'Unknown step';
  }
}

export default function HowItWorks() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <Typography className={classes.title}>
            How It Works
          </Typography>
        </Grid>
        <Grid item xs> </Grid>
        <Grid item xs={10}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <Typography>{getStepContent(index)}</Typography>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="outlined"
                        color="gray"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} className={classes.resetContainer}>
              <Typography>You&apos;re ready to use C A C H E!</Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </Paper>
          )}
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}

