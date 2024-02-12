import React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from '@mui/material/styles';
import tech from "../data/techstack.json";
import "@fontsource/roboto";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#BB001B",
  },
}));

class Skills extends React.Component {
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
          marginRight: "7%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "left",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Typography variant="h3" color="white">
            Skills&lt;/&gt;
          </Typography>
        </div>
        <Typography
          variant="subtitle1"
          color="#fafafa"
          sx={{ marginBottom: "5%", display: "flex", justifyContent: "center"}}
        >
          Expert Backend Developer | Full Stack Developer | Tech Lead
        </Typography>
        <Grid container spacing={6}>
          {tech.map((skill) => (
            <Grid item xs={6} md={4} lg={3}>
              
                {/* <img src={skill.image} style={{ width: "50px" }} /> */}
                <Typography variant="body2" color="white">
                  {skill.tech}
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                <BorderLinearProgress variant="determinate" value={skill.rating*10} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="white">{(skill.rating*10)+"%"}</Typography>
      </Box>
                </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default Skills;
