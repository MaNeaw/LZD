import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function flashsale() {
  return (
  
    <Box sx={{ flexGrow: 1,backgroundColor:'white' }}>
        <h2 className="_h4">Flashsale</h2><p className="_p_s">ขณะนี้ราคาลดอยู่</p>
    <Grid container spacing={2}>
      <Grid xs={6} md={2}>
        <Card sx={{ maxWidth: '100%' ,
                backgroundColor: "white",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },}}>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.pixabay.com/photo/2015/07/05/23/28/shoes-832875_960_720.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  รองเท้า
                </Typography>
                <Typography
                  variant="body2"
                  color="#F27E06"
                  sx={{ fontSize: "20px" }}
                >
                  ฿60.28
                </Typography>
              </CardContent>
            </Card> 
      </Grid>
      <Grid xs={6} md={2}>
         <Card sx={{ maxWidth: '100%' ,
                backgroundColor: "white",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },}}>
              <CardMedia
                component="img"
                height="200"
                image="https://c.pxhere.com/photos/67/8a/t_shirt_white_garment_rags_vacuum_cancas_model-812168.jpg!d"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  เสื้อยืดสีขาว
                </Typography>
                <Typography
                  variant="body2"
                  color="#F27E06"
                  sx={{ fontSize: "20px" }}
                >
                  ฿200.28
                </Typography>
              </CardContent>
            </Card> 
      </Grid>
      <Grid xs={6} md={2}>
      <Card sx={{ maxWidth: '100%' ,
                backgroundColor: "white",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },}}>
              <CardMedia
                component="img"
                height="200"
                image="https://c.pxhere.com/photos/eb/65/jeans_wasing_denim_jean_top_view_things-654632.jpg!d"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                 กางเกงยีนส์
                </Typography>
                <Typography
                  variant="body2"
                  color="#F27E06"
                  sx={{ fontSize: "20px" }}
                >
                  ฿300.28
                </Typography>
              </CardContent>
            </Card>  
      </Grid>
      <Grid xs={6} md={2}>
       <Card sx={{ maxWidth: '100%' ,
                backgroundColor: "white",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },}}>
              <CardMedia
                component="img"
                height="200"
                image="https://c.pxhere.com/photos/51/aa/electric_appliance_kitchen_appliance_toaster-1146534.jpg!d"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  เครื่องปิ้งขนมปัง
                </Typography>
                <Typography
                  variant="body2"
                  color="#F27E06"
                  sx={{ fontSize: "20px" }}
                >
                  ฿505
                </Typography>
              </CardContent>
            </Card> 
      </Grid>
      <Grid xs={6} md={2}>
         <Card sx={{ maxWidth: '100%' ,
                backgroundColor: "white",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },}}>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.pixabay.com/photo/2011/04/03/13/31/iron-6046_960_720.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  เตารีด
                </Typography>
                <Typography
                  variant="body2"
                  color="#F27E06"
                  sx={{ fontSize: "20px" }}
                >
                  ฿700.78
                </Typography>
              </CardContent>
            </Card>  
      </Grid><Grid xs={6} md={2}>
         <Card sx={{ maxWidth: '100%' ,
                backgroundColor: "white",
                "&:hover": {
                  opacity: [0.9, 0.8, 0.7],
                },}}>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn.pixabay.com/photo/2016/11/18/14/42/antique-1835006_960_720.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ทีวีตู้
                </Typography>
                <Typography
                  variant="body2"
                  color="#F27E06"
                  sx={{ fontSize: "20px" }}
                >
                  ฿4000
                </Typography>
              </CardContent>
            </Card>  
      </Grid>
    
    </Grid>
  </Box>
     
       
     
 
  );
}

export default flashsale;
