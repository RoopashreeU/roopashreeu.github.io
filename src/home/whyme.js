import React from 'react';
import Typography from '@mui/material/Typography';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import photo from '../images/Roopa.jpg';
import data from '../data/data.json'
import '@fontsource/roboto';
import { Step, StepContent, StepLabel, Stepper } from '@mui/material';

class WhyMe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ marginLeft: '7%', display:"flex", flexDirection: "row" }}>
                
                <Stepper
            activeStep={5}
            orientation="vertical"
            sx={{ alignItems: "left", marginLeft: "8%", marginRight: "8%", borderRadius: "1px" }}
          >
            {data.hightlights.map((highlight) => (
              <Step active="true" key={highlight}>
                  <StepLabel
                  StepIconComponent={RadioButtonCheckedIcon}
                  style={{ color: "white" }}>
                  <Typography
                    variant="h5"
                    style={{ blackSpace: "pre-line", color: "white" }}
                  >
                    {highlight}
                  </Typography>
                  </StepLabel>
              </Step>
            ))}
          </Stepper>
                <img src={photo} style={{ width: "40%", height: "100%" }} />
            </div>
        );
    }
}

export default WhyMe;