import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import data from '../data/data.json';
import '@fontsource/roboto';
import { Button } from '@mui/material';

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: '4%', marginLeft: '-4%' }}>
               <Button href={data.urls.linkedin}><LinkedInIcon fontSize='large' sx={{color:'#0e76a8'}}/></Button>
               <Button href={data.urls.gmail}><MailIcon fontSize='large' sx={{color:'#BB001B'}} /></Button>
               <Button href={data.urls.github}><GitHubIcon fontSize='large' sx={{color:'#6e5494'}} /></Button>
            </div>
        );
    }
}

export default Contact;