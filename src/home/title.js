import React from 'react';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto';

class Title extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ marginLeft: '7%', marginTop: '5%', display: 'flex', justifyContent: 'space-around', alignItems: 'left', flexDirection: 'column' }}>
                <Typography variant="h2" style={{color: '#ffffff', marginBottom: '2px', fontSize: 50}}>Roopashree Uthamacholan</Typography>
                <Typography variant="h4" style={{color: '#ffffff'}}>Software Engineer</Typography>
            </div>
        );
    }
}

export default Title;