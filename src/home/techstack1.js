import React from "react";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import TechStackDetails from "../data/techstack.json";
import "@fontsource/roboto";

class TechStack1 extends React.Component {
  constructor(props) {
    super(props);
  }

  makeChip = (tech, expertise) => {
    return (
      <Chip
        label={tech}
        color={expertise}
        variant="outlined"
        sx={{ marginBottom: "2%", marginRight: '0.5%' }}
      />
    );
  };

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexFlow: "wrap",
            alignItems: "left",
            marginLeft: '10%',
            marginTop: '2%',
          }}>{TechStackDetails.map((data) => this.makeChip(data.tech, data.color))}</div>
        </div>
    );
  }
}

export default TechStack1;
