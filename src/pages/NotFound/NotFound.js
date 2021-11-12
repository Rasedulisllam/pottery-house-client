import { Button } from '@mui/material';
import React from 'react';
import { useHistory } from 'react-router';
import notFound from '../../images/notFound/404-error-page-found_41910-364.jpg'

const NotFound = () => {
    const history=useHistory()
    const notFoundMain={
        background:`url(${notFound})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'100%',
        height:'100vh',
        position:'relative'
    }
    return (
        <div style={notFoundMain}>
            <Button 
            onClick={()=>history.push('/home')}
            variant="contained" 
            sx={{position:'absolute',bottom:'16%', left:'45%'}} 
            color='info'>go home</Button>
        </div>
    );
};

export default NotFound;