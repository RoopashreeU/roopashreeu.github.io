import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import StarIcon from "@mui/icons-material/Star";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CompanyDetails from "../data/company.json";
import "@fontsource/roboto";

class Company extends React.Component {
  constructor(props) {
    super(props);
  }

  companyCard = (logo, title, duration, desc) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <Avatar src={logo} sx={{ width: 60, height: 60, marginBottom: "3%", color:'#ffffff' }} /> */}
        <Avatar variant="square" src={logo} sx={{ width: 150, marginBottom: "3%", color:'#ffffff' }} />
        <Typography
          variant="subtitle1"
          sx={{ fontSize: 13, textAlign: "center", color:'#ffffff' }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontSize: 11, color:'#ffffff' }}>
          {duration}
        </Typography>
      </div>
    );
  };

  getXS = (i) => {
    if (i === 4 || i === 5) {
      return 2;
    } else {
      return 2;
    }
  };

  render() {
    const companyCount = CompanyDetails.length;
    let i = 0;
    return (
      <Paper sx={{ margin: '0% 5% 2% 5%', boxShadow:"0px 2px 10px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)", align: 'center' }}>
        <Grid
          container
          gap={2}
          xs={12}
          md={12}
          style={{ justifyContent: "center", padding: "2%" }}
        >
          {CompanyDetails.map((data) => (
            <Grid id={data.logo} lg={this.getXS(++i)} xs={12} md={6}>
              {this.companyCard(
                data.logoFull
              )}
            </Grid>
          ))}
        </Grid>
      </Paper>
    );
  }
}

export default Company;
