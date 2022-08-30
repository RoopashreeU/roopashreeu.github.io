import React from "react";
import Typography from "@mui/material/Typography";
import Divider from '@mui/material/Divider';
import CircleIcon from '@mui/icons-material/Circle';

class Experience extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div style={{alignContent: 'center', paddingBottom: '6%'}}>
            <Divider variant='middle' sx={{marginBottom: '1%'}}>
                <CircleIcon sx={{color: '#424242', fontSize: 8, padding: '3%', marginRight: '3'}}/>
                <CircleIcon sx={{color: '#424242', fontSize: 8, padding: '3%', marginRight: '3'}}/>
                <CircleIcon sx={{color: '#424242', fontSize: 8, padding: '3%'}}/>
            </Divider>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <div style={{ textAlign: "center", paddingLeft: "3%", paddingRight: "3%" }}>
          <Typography
            variant="h2"
            style={{ color: "#ffffff", marginBottom: "2px", fontSize: 100 }}
          >
            6+
          </Typography>
          <Typography variant="caption" style={{ color: "#ffffff" }}>
            Years of Experience
          </Typography>
        </div>
        <div style={{paddingLeft: "7%", paddingRight: "5%", textAlign: "center"}}>
        <Typography
            variant="h5"
            style={{ color: "#ffffff", textAlign: "left"}}
          >
            About me
          </Typography>
          <Typography
            variant="body2"
            style={{ color: "#ffffff", marginBottom: "2px", textAlign: "left" }}
          >
            <p style={{ marginBottom: '0%'}}>Strong knowledge in Object Oriented Concepts</p>
            <p style={{marginTop: '0%', marginBottom: '0%'}}>Good Leadership skills</p>
            <p style={{marginTop: '0%', marginBottom: '0%'}}>Excellent client interfacing skills</p>
            <p style={{marginTop: '0%', marginBottom: '0%'}}>Experience in Java Web Service, Spring and Hibernate frameworks</p>
            <p style={{marginTop: '0%', marginBottom: '0%'}}>Good in Algorithms and Data structures</p>
          </Typography>
        </div>
        </div>
      </div>
    );
  }
}

export default Experience;
