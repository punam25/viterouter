import React from 'react';
import { Link,Box } from '@mui/material';
import { Outlet } from 'react-router-dom';


const SimpleNavigation=(props)=> {
  return (
    <Box>
    <Box 
    sx={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
         typography: 'body1'
         }}
         >
      <Link href="/">Home</Link>
      <Link href="/welcome">Welcome</Link>
      <Link href="/admission">Admission</Link>;
      
    </Box>
    <Outlet />
    </Box>
  );
};

export default SimpleNavigation;
