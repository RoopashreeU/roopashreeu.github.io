import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import WorkIcon from "@mui/icons-material/Work";
import steps from "../data/company.json";
import "@fontsource/roboto";
import { Avatar, Chip } from "@mui/material";
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';

class WorkTimeline extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;
    return (
      
        <Paper
          elevation="24"
          sx={{
            bgcolor: '#fafafa',
            margin: "5% 5% 2% 5%",
            paddingBottom: "5%",
            align: "center",
            backgroundColor: "#fafafa",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginBottom: "1%",
              paddingTop: "3%",
              color: "black",
            }}
          >
            
          </Typography>
          <Stepper
            activeStep={5}
            orientation="vertical"
            sx={{ alignItems: "left", marginLeft: "8%", marginRight: "8%", borderRadius: "1px" }}
          >
            {steps.map((step) => (
              <Step active="true" key={step.label}>
                <StepLabel
                  StepIconComponent={WorkIcon}
                  style={{ color: "black" }}
                >
                  <div style={{ display: "flex"}}>
                    <Avatar variant="square" src={step.logoFull} sx={{ width: 150, color:'#ffffff' }} />
                  {/* <div
                    style={{
                      backgroundColor: "#03a9f4",
                      display: "inline-block",
                      padding: "0% 1% 0% 1%",
                      borderRadius: "2px",
                    }}
                  >
                    
                    <Typography variant="h5" sx={{ color: "white" }}>
                      {step.name}
                    </Typography>
                  </div> */}
                  </div>
                  {/* <Chip
                  label={<Typography variant='subtitle2' sx={{color: "white"}}>{step.title}</Typography>}
                  color="success"
                  variant="filled"
                  size="small"
                  sx={{marginTop:'1%', marginBottom: "1%"}}>
                </Chip> */}
                  <div
                    style={{
                      backgroundColor: "indigo",
                      display: "inline-block",
                      padding: "0% 1% 0% 1%",
                      borderRadius: "2px",
                      marginTop: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "white" }}>
                      {step.title}
                    </Typography>
                  </div>
                  <br />
                  <Chip
                    label={
                      <Typography variant="subtitle2" sx={{ color: "black" }}>
                        {step.duration}
                      </Typography>
                    }
                    color="info"
                    variant="outlined"
                    size="small"
                  ></Chip>
                </StepLabel>
                <StepContent>
                  <Typography
                    variant="body1"
                    style={{ blackSpace: "pre-line", color: "black" }}
                  >
                    {step.desc}
                  </Typography>
                  {/* Tech Used as a colored label followed by para of techs*/}
                  {/* <div
                    style={{
                      backgroundColor: "purple",
                      display: "inline-block",
                      padding: "0% 1% 0% 1%",
                      borderRadius: "2px",
                      marginTop: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    <Typography
                    variant="body1"
                    style={{ blackSpace: "pre-line", color: "white" }}
                  >
                    Tech Stack
                  </Typography>
                    </div>
                    <Typography
                    variant="body1"
                    style={{ blackSpace: "pre-line", color: "black" }}
                  >
                    {step.tech}
                  </Typography> */}
                  { step.tech.split(',').map( (tech) => (
                    <Chip
                    label={<Typography variant='subtitle2' sx={{color: "white"}}>{tech}</Typography>}
                    color="info"
                    variant="filled"
                    size="small"
                    sx={{marginTop:'1%', marginBottom: "1%", marginLeft: "0.5%", padding:"2px"}}>
                  </Chip>
                  ))}
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Paper>
    );
  }
}

export default WorkTimeline;
