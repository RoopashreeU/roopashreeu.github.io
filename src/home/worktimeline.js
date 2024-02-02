import React from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import WorkIcon from '@mui/icons-material/Work';
import steps from "../data/company.json";
import "@fontsource/roboto";
import { Chip } from "@mui/material";

class WorkTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;
    return (
      <Paper sx={{ margin: '2% 5% 2% 5%', paddingBottom: '5%', boxShadow:"0px 2px 15px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)", align: 'center', backgroundColor: "#212121" }}>
        <Typography variant="h3" sx={{textAlign: 'center', marginBottom: '1%', paddingTop:'3%', color: "white"}}>Experience</Typography>
        <Stepper activeStep={5} orientation="vertical" sx={{alignItems:"left", marginLeft: "8%", marginRight:'8%'}}>
          {steps.map((step) => (
            <Step active='true' key={step.label}>
              <StepLabel StepIconComponent={WorkIcon} style={{color: "white"}}>
                <div style={{backgroundColor: "#03a9f4", display: "inline-block", padding: '0% 1% 0% 1%', borderRadius: "2px"}}>
                  <Typography variant='h5' sx={{color: "white"}}>{step.name}</Typography>
                </div>
                <br/>
                {/* <Chip
                  label={<Typography variant='subtitle2' sx={{color: "white"}}>{step.title}</Typography>}
                  color="success"
                  variant="filled"
                  size="small"
                  sx={{marginTop:'1%', marginBottom: "1%"}}>
                </Chip> */}
                <div style={{backgroundColor: "green", display: "inline-block", padding: '0% 1% 0% 1%', borderRadius: "2px", marginTop:'1%', marginBottom: "1%"}}>
                <Typography variant='subtitle2' sx={{color: "white"}}>{step.title}</Typography>
                </div>
                <br/>
                <Chip
                  label={<Typography variant='subtitle2' sx={{color: "white"}}>{step.duration}</Typography>}
                  color="info"
                  variant="outlined"
                  size="small">
                </Chip>
              </StepLabel>
              <StepContent>
                <Typography variant="body2" style={{blackSpace: 'pre-line', color: "white"}}>{step.desc}</Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Paper>
    );
  }
}

export default WorkTimeline;
