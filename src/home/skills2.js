import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import tech from "../data/techstack.json";
import "@fontsource/roboto";
import { Grid, Typography } from "@mui/material";

class Skills2 extends React.Component {
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
        <div style={{backgroundColor: "white", borderRadius: "20px", width: "fit-content", padding: "1% 1% 1% 1%"}}>
        <Typography variant="h3" color="black" >
          Skills
        </Typography>
        </div>
        <Typography variant="subtitle1" color="#fafafa" sx={{ marginBottom: "2%" }}>
          Expert Backend Developer | Full Stack Developer | Tech Lead
        </Typography>
        <Grid container spacing={5}>
          {tech.map((skill) => (
            <Grid item xs>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" color="white">
                  {skill.tech}
                </Typography>
              </div>
              <Rating
                name="customized-color"
                defaultValue={skill.rating}
                precision={0.5}
                max={10}
                icon={<StarIcon fontSize="medium" sx={{color: "#489577"}} />}
                emptyIcon={<StarBorderIcon fontSize="medium" sx={{color: "white"}}/>}
              />
            </Grid>
          ))}
        </Grid>

      </div>
    );
  }
}

export default Skills2;
