import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import tech from "../data/techstack.json";
import "@fontsource/roboto";
import { Avatar, Grid, Typography } from "@mui/material";

class Skills1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          marginLeft: "7%",
          marginTop: "4%",
          marginBottom: "5%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <div style={{backgroundColor: "white", borderRadius: "40px", width: "fit-content", padding: "0.5% 1.5% 0.5% 1.5%", align:"center"}}>
        <Typography variant="h3" color="black" >
          Skills&lt;/&gt;
        </Typography>
        </div>
        <Typography variant="subtitle1" color="#fafafa" sx={{ marginBottom: "2%" }}>
          Expert Backend Developer | Full Stack Developer | Tech Lead
        </Typography>
        <Grid container spacing={3}>
          {tech.map((skill) => (
            <Grid item xs={4} lg={3} md={3}>
                <div style={{backgroundColor: "#489577", boxShadow:"0px 2px 10px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",  height:"100px", width: "100px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                <img src={skill.image} style={{width: "50px"}} />
                    <Typography variant="subtitle2" color="black" >
                        {skill.tech}
                    </Typography>
                </div>
            </Grid>
          ))}
        </Grid>

      </div>
    );
  }
}

export default Skills1;
