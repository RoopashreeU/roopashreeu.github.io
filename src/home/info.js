import React from 'react';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto';

class Info extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'left', flexDirection: 'column', borderSpacing: '2px' }}>
                <Typography variant="h2" style={{color: '#3f51b5', marginBottom: '2px'}}>Roopashree Uthamacholan</Typography>
                <Typography variant="h4" style={{color: '#3f51b5'}}>Software Engineer</Typography>
            </div>
        );
    }
}

export default Info;