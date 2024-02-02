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
import CompanyDetails from "../../data/company.json";
import "@fontsource/roboto";
import { Divider } from "@mui/material";

class Walmart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Paper
        sx={{
          margin: "2% 5% 2% 5%",
          boxShadow:
            "0px 2px 10px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
          align: "center",
          height: "500px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center",  width: "100%", height: "100%" }}>
          <Avatar
            variant="square"
            src="/images/walmart-full.png"
            sx={{ width: 280}}
          />
        </div>
      </Paper>
    );
  }
}

export default Walmart;
