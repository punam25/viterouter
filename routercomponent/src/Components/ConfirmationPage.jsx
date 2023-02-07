import { Box ,Button} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ConfirmationPage=(props)=>{
    const navigate = useNavigate();
    const {state} =useLocation();
    // const {fname,lname,mname,gname,coffee,age1,technology1}=state;

    const formSuccess=()=>{
         navigate("/success");
    }
  return(
    <Box  sx={{
      bgcolor: "lightgreen",
      display: "flex",
      padding: 5
  }}>
      <pre>{JSON.stringify(state)}</pre>
      {/* <table border="1px solid">
        <tr>
          <td>fname</td>
          <td>{fname}</td>
        </tr>
        <tr>
          <td>mname</td>
          <td>{mname}</td>
        </tr>
        <tr>
          <td>lname</td>
          <td>{lname}</td>
        </tr>
        <tr>
          <td>gender</td>
          <td>{gname}</td>
        </tr>
        <tr>
          <td>age</td>
          <td>{age1}</td>
        </tr>
        <tr>
          <td>coffee</td>
          <td>{coffee}</td>
        </tr>
        <tr>
          <td>technology</td>
          <td>{technology1}</td>
        </tr>
        
      </table> */}
    
        <Button variant='contained'
        onClick={formSuccess}
        >
            accept</Button>
            </Box>          
    
    
  )
     
}
export default ConfirmationPage;

