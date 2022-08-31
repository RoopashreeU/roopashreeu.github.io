import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import VideocamIcon from '@mui/icons-material/Videocam';
import '@fontsource/roboto';

class GetInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ display: 'flex', height: '100%', flexDirection: 'row', marginLeft: '6%', alignItems: 'left' }}>
                <Button startIcon={<VideocamIcon/>} sx={{bgcolor: 'blue', color: 'white', borderRadius: "50px", width: "250px", height: "60px", margin: "0px 12px 14% 2px", alignSelf:"flex-end"}}>Video Intro</Button>
                <Button startIcon={<DownloadIcon/>} sx={{bgcolor: 'green', color: 'white', borderRadius: "50px", width: "250px", height: "60px", margin: "12px 2px 14% 2px", alignSelf:"flex-end"}}>Get Resume</Button>
            </div>
        );
    }
}

export default GetInfo;