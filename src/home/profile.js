import React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ProfilePic from '../images/Roopa.jpg';
import Contact from './contact';
import '@fontsource/roboto';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ padding: '5%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', borderSpacing: '2px' }}>
                <Avatar src={ProfilePic} sx={{ width: "210px", height: "200px" }}/>
                <Contact />
            </div>
        );
    }
}

export default Profile;