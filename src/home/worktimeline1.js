import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Grid from '@mui/material/Grid';
import { Chip } from "@mui/material";
import workinfo from '../data/company.json'
import "@fontsource/roboto";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

class WorkTimeline1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        expanded: false
    }
  }

  handleExpandClick = () => {
    this.state = {
        expanded: this.expanded ? false: true
    }
  };

  render() {
    let count = 0;
    return (
      <div>
        <div
          style={{ backgroundColor: "#fafafa"}}
        ></div>
        <Paper
          elevation="24"
          sx={{
            bgcolor: '#edebad',
            margin: "2% 1% 2% 1%",
            padding: "5%",
            align: "center",
            backgroundColor: "#fafafa",
          }}
        >
            {/* <div style={{display: "flex", justifyContent: "space-evenly", flexDirection: "row"}}> */}
            <Grid container spacing={2}>
            {workinfo.map((workdata) => (
                <Grid xs={workdata.grid}>
          <Card sx={{ maxWidth: 445, margin: "2%" }}>
      <CardMedia
        component="img"
        height="150"
        image={workdata.logo}
        sx={{ padding: "2%", margin: "1%", objectFit: "contain" }}
        alt={workdata.name}
      />
      <CardContent>
      <div
                    style={{
                      backgroundColor: "green",
                      display: "inline-block",
                      padding: "0% 1% 0% 1%",
                      borderRadius: "2px",
                      margin: "1%",
                      marginBottom: "1%",
                    }}
                  >
                    <Typography variant="subtitle2" sx={{ color: "white" }}>
                      {workdata.title}
                    </Typography>
                  </div>
                  <Chip
                    label={
                      <Typography variant="subtitle2" sx={{ color: "white" }}>
                        {workdata.duration}
                      </Typography>
                    }
                    color="secondary"
                    size="small"
                  ></Chip>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={this.expanded}
          onClick={this.handleExpandClick()}
          aria-expanded={this.expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={this.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card></Grid>
            ))}
            </Grid>
        </Paper>
      </div>
    );
  }
}

export default WorkTimeline1;
