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
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

class WorkHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let count = 0;
    return (
      <div style={{marginBottom: "5%"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "2%",
            paddingTop: "3%",
          }}
        >
          
        </div>
        {steps.map((step) => (
          <Paper
            sx={{
              margin: "0% 5% 2% 5%",
              padding: "2% 2% 2% 1%",
              boxShadow:
                "0px 2px 10px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              align: "center",
            }}
          >
            <div style={{ marginLeft: "5%" }}>
              <div style={{ display: "flex", marginTop: "2%" }}>
                <Avatar
                  variant="square"
                  src={step.logoFull}
                  sx={{ width: 150, color: "#ffffff" }}
                />
              </div>
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
            </div>
            <div style={{ marginLeft: "5%", marginTop: "1.5%", marginBottom: "0.5%" }}>
              <Typography
                variant="body1"
                style={{ blackSpace: "pre-line", color: "black" }}
              >
                {step.desc}
              </Typography>
              {step.tech.split(",").map((tech) => (
                <Chip
                  label={
                    <Typography variant="subtitle2" sx={{ color: "white" }}>
                      {tech}
                    </Typography>
                  }
                  color="info"
                  variant="filled"
                  size="small"
                  sx={{
                    marginTop: "1%",
                    marginBottom: "1%",
                    marginRight: "1%",
                    padding: "2px",
                  }}
                ></Chip>
              ))}
            </div>
          </Paper>
        ))}
      </div>
    );
  }
}

export default WorkHistory;
