import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Typography } from "@mui/material";
import Contact from "./contact";
import FavoriteIcon from '@mui/icons-material/Favorite';

class MyFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "1%", flexDirection: "column", alignItem: "center"}}>
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "1%" }}>
        <LinkedInIcon fontSize="large" sx={{ color: "#0e76a8" }} />
        <MailIcon fontSize="large" sx={{ color: "#BB001B" }} />
        <GitHubIcon fontSize="large" sx={{ color: "#6e5494" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", paddingBottom: "1%" }}>
        <Typography
          variant="body1"
          color="white"
        >
          Developed & Maintained by Roopashree Uthamacholan &nbsp;
        </Typography>
        <FavoriteIcon sx={{color: "red"}}/>
        </div>
      </div>
    );
  }
}

export default MyFooter;
