import React from 'react';
import { Typography } from "@mui/material";

class AboutMe extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div style={{ marginLeft: '7%', marginTop: '5%', marginBottom: '5%', display: 'flex', justifyContent: 'space-around', alignItems: 'left', flexDirection: 'column' }}>
                <Typography
                variant='h3' 
                color='white'
                >
                    About Me
                </Typography>
                <Typography 
                variant='body1' 
                color='white'
                style={{marginTop: '2%', marginRight: '7%'}}
                >
                    Hello! I'm Roopashree Uthamacholan from Komarapalayam, TamilNadu, India. I'm a Software Engineer by profession.
                    I have a Bachelor's degree in the field of Information Technology. I'm very good at problem solving and maths, and thats one of the reasons why I'm a Software Engineer.
                    I do have 7 years of experience in Software Development. I'm a tech lead, mentoring a team of five.
                    <br/><br/>
                    During my leisure, I love to cook, sketch, play table tennies with my husband. I have very good communication skills and I'm a public speaker. I have given many tech talks in local community meetups.

                </Typography>
            </div>
        )
    }
}

export default AboutMe