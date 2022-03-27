import React,{useState} from 'react';

// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Grid from  '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




export default function TeachersDashboard() {
  // const [expanded, setExpanded] = React.useState(false);

const [addStudentTrue,setAddStudentTrue]=useState(false)

const handleAddStudentTrue = () =>{
  setAddStudentTrue(true)
}
const handleAddStudentFalse = () =>{
  setAddStudentTrue(false)

}

return (

    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="sm">
      <Box sx={{ height: '100vh' }} >
    <Grid>     
    <Card sx={{ maxWidth: "400px",mx:"50px" }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     R
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title="TeachersDashboard"
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        // image="https://png.pngtree.com/png-clipart/20200224/original/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_5247852.jpg"
        image="data:image/png;base64,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"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {/* This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. */}
          TeachersDashboard
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
     
        </IconButton>
        <IconButton aria-label="share">
   
        </IconButton>
    
      </CardActions>
     
    </Card>
    </Grid>


    {/* <Button variant="contained" sx={{my:"30px",mx:"10px"}} >Create Class</Button>
    <Button variant="contained" sx={{my:"30px",mx:"10px"}} >Add Student</Button> */}

    <Button variant="contained" onClick={handleAddStudentTrue} sx={{my:"30px",mx:"10px"}} >Create Class</Button>
    <Button variant="contained" onClick={handleAddStudentFalse} sx={{my:"30px",mx:"10px"}} >Add Student</Button>

    {addStudentTrue && (
      <>
          <Typography sx={{mt:"30px"}} variant="h3" gutterBottom component="div">
        Class Details
    </Typography>
    <Grid>
    <TextField  sx={{mt:"30px"}}
                  autoComplete="given-name"
                  name="subjectName"
                  required
                  fullWidth
                  id="subjectName"
                  label="subjectName"
                  autoFocus
                  />
    </Grid>
    <Grid>
    <TextField  sx={{mt:"30px"}}
                  autoComplete="given-name"
                  name="Document"
                  required
                  fullWidth
                  id="Document"
                  label="Documment"
                  autoFocus
                  />
    </Grid>
    <Button variant="outlined" color='success' sx={{my:"30px",mx:"180px"}} >Create Class</Button>
      </>
    )} 


  {!addStudentTrue && (
    <>
        <Typography sx={{mt:"30px"}} variant="h3" gutterBottom component="div">
       Add Student
    </Typography>
    <Grid>
    <TextField  sx={{mt:"30px"}}
                  autoComplete="given-name"
                  name="studentName"
                  required
                  fullWidth
                  id="studentName"
                  label="studentName"
                  autoFocus
                  />
    </Grid>
    <Grid>
    <TextField  sx={{mt:"30px"}}
                  autoComplete="given-name"
                  name="class subjectName"
                  required
                  fullWidth
                  id="class subjectName"
                  label="class subjectName"
                  autoFocus
                  />
    </Grid>
    <Button variant="outlined" sx={{my:"30px",mx:"180px"}} >Create Class</Button>
    </>
  )}




    </Box>
    </Container>
  </React.Fragment>

  );
}
