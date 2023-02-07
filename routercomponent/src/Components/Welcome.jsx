import { Button ,Box} from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome=(props)=>{
    const navigate=useNavigate();
    const goToAdmissionForm=()=>{
        navigate("/admission");
    }
  return (
    <Box>
        <Button variant='contained'
        onClick={goToAdmissionForm}
        >
            Go to Admission Form</Button>
    </Box>
     )
}
export default Welcome;
