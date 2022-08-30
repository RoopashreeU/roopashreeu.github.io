import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import '@fontsource/roboto';

class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginTop: '4%' }}>
               <LinkedInIcon fontSize='large' sx={{color:'#0e76a8'}} />
               <MailIcon fontSize='large' sx={{color:'#BB001B'}} />
               <GitHubIcon fontSize='large' sx={{color:'#6e5494'}} />
            </div>
        );
    }
}

export default Contact;