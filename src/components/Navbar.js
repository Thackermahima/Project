import React from 'react'
import { AppBar, Toolbar, Button, Typography} from '@mui/material'
import { Box } from '@mui/system'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
   
<AppBar color='inherit' position='fixed' sx={{ height:'70px'}}>
    <Toolbar>
      <Link to="/" style={{ textDecoration: 'none' }}>
      <Typography>
      <img src="" alt="logo"/>
      </Typography>
      </Link>
      
<Box m = {1} p ={2} sx={{ flexGrow: 1}} align="right">
  {/* <Link to = "/">
  <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
  Search Form
  </Button>
  </Link> */}
<Link to="gradeAnalysis" style={{ textDecoration: 'none' }}>
  <Button style={{color:'black', fontWeight:'bold' ,textTransform:'capitalize'}} size='medium' variant='text'>
 Analysis of result
  </Button>
  </Link>

{/* <Button style ={{color:'#D82148', fontWeight:'bold', textTransform:'capitalize',border:'1px solid #D82148'}} size = "small" variant="outlined"  sx={{borderRadius:2}}>
Connect
</Button> */}

</Box>
       
      </Toolbar>
</AppBar>



    )
}

export default Navbar;