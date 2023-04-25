import React from 'react'
import { Typography, Grid } from '@mui/material'

const Home = () => {
  return (
    <>
<Grid container display="column" alignItems="center" justifyContent='center' >
<Grid item>

<Typography fontSize={34} fontWeight='bold'  align="center" mt={25} textAlign='center'> 
This system is a part of <span style={{color: "#419f89"}}>student portal</span> , an online platform that <br />allows
            users to find their <span style={{color: "#419f89"}}> results</span> and extract  <span style={{color: "#419f89"}}> analised</span> data!.  
               </Typography>
 
</Grid>
</Grid>

</>
    
  )
}

export default Home
