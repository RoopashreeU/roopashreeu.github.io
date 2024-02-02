import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import TechStackDetails from "../data/techstack.json";
import "@fontsource/roboto";

class TechStack extends React.Component {
  constructor(props) {
    super(props);
  }

  makeChip = (tech, expertise) => {
    return (
      <Chip
        label={tech}
        color={expertise}
        variant="outlined"
        sx={{ marginBottom: "2%" }}
      />
    );
  };

  render() {
    return (
      <div>
        <Divider variant="middle" sx={{ marginBottom: "3%" }} />
        <div
        >
        <Typography variant='subtitle1' sx= {{marginLeft: '2%'}}>Tech Stack</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexFlow: "wrap",
            alignItems: "center",
            padding: "2%",
          }}>{TechStackDetails.map((data) => this.makeChip(data.tech, data.color))}</div>
        </div>
      </div>
    );
  }
}

export default TechStack;
