import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import VideocamIcon from '@mui/icons-material/Videocam';
import '@fontsource/roboto';
import data from '../data/data.json';
import FullScreenDialog from './fullscreendialog';
import { CloseOutlined, TurnedInTwoTone } from '@mui/icons-material';
import { AppBar, Dialog, Divider, IconButton, List, ListItemButton, ListItemText, Slide, Toolbar } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

class GetInfo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }

    playIntro = () => {
        console.log("into playIntro")
        
    }

    handleClickOpen = () => {
        this.state = {
            open: true
        }
      }
    
      handleClose = () => {
        this.state = {
            open: false
        }
      }

    render() {
        return (
            <div style={{ display: 'flex', height: '100%', flexDirection: 'row', marginLeft: '6%', alignItems: 'center' }}>
                <Button startIcon={<VideocamIcon/>} href={data.urls['intro-video']} sx={{bgcolor: 'blue', color: 'white', borderRadius: "50px", width: "250px", height: "60px", margin: "0px 12px 14% 2px", alignSelf:"flex-end"}}>Video Intro</Button>
                <Button startIcon={<DownloadIcon/>} href={data.urls.resume} sx={{bgcolor: 'green', color: 'white', borderRadius: "50px", width: "250px", height: "60px", margin: "12px 2px 14% 2px", alignSelf:"flex-end"}}>Get Resume</Button>
                
            </div>
        );
    }
}

export default GetInfo;