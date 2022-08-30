import React from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import steps from "../data/company.json";
import "@fontsource/roboto";

class WorkTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;
    return (
      <Paper sx={{ margin: '2% 5% 2% 5%', boxShadow:"0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)", align: 'center' }}>
        <Typography variant="h5" sx={{textAlign: 'center', marginBottom: '1%', paddingTop:'3%', color: "black"}}>Experience</Typography>
        <Stepper activeStep={5} orientation="vertical" sx={{alignItems:"left", marginLeft: "8%", marginRight:'8%'}}>
          {steps.map((step) => (
            <Step active='true' key={step.label}>
              <StepLabel>
                <Typography variant='h6' sx={{color: "black"}}>{step.name}</Typography>
                <Typography variant='subtitle2' sx={{color: "black"}}>{step.title}</Typography>
                <Typography variant='caption' sx={{color: "black"}}>{step.duration}</Typography>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" style={{blackSpace: 'pre-line', color: "black"}}>{step.desc}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    );
  }
}

export default WorkTimeline;
