import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Profile from "./profile";
import Title from "./title";
import Company from "./companies";
import TechStack from "./techstack";
import TechStack1 from "./techstack1";
import Experience from "./experience";
import AppBar from '@mui/material/AppBar';
import WorkTimeline from "./worktimeline";
import Walmart from "./work/walmart";
import GetInfo from "./getinfo";
import ToolBar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import AboutMe from "./aboutme";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing={2} sx={{ bgcolor: "#ffffff", flexGrow: 1 }}>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <AppBar position='static' sx={{bgcolor: '#212121', padding: '0%'}}>
            <ToolBar sx={{padding: '2%', display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
              <Button sx={{color: "white"}}>Home</Button>
              <Button sx={{color: "white"}}>About me</Button>
              <Button sx={{color: "white"}}>Experience</Button>
              <Button sx={{color: "white"}}>Contact</Button>
            </ToolBar>
          </AppBar>
        </Grid>
        <Grid item md={7} lg={7} sm={12} xs={12} sx={{ bgcolor: "#212121" }}>
          <Grid>
            <Title />
          </Grid>
          <Grid item md={8} lg={8} sm={12} xs={12} sx={{ bgcolor: "#212121" }}>
            <TechStack1 />
          </Grid>
        </Grid>
        <Grid item md={5} lg={5} sm={12} xs={12} sx={{ bgcolor: "#212121" }}>
          <Profile />
        </Grid>
        <Grid item md={7} lg={7} sm={12} xs={12} sx={{ bgcolor: "#212121" }}>
          <GetInfo />
        </Grid>
        <Grid item md={5} lg={5} sm={12} xs={12} sx={{ bgcolor: "#212121" }}>
          <Experience />
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12} sx={{ bgcolor: "#fafafa" }}>
          <Company />
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12} sx={{ bgcolor: "#6e5494" }}>
          <AboutMe/>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
