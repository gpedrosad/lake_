import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({title, description, image}) {
  return (
    <Card sx={
      { 
        width: '60%',
        height:'100%', 
        margin: '2% 40% 30% 20%', 
        justifyContent: 'center', 
        display: 'flex', 
        alignItems: 'center', 
        flexDirection: 'column'
     }
     }>
      <CardActionArea sx={{display:'flex', flexDirection:'column'}}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="card image"
        />
        <CardContent sx={
          {
            backgroundColor:'#3C5220',
            color:'white',
            display:'flex',
            justifyContent:'center',
            flexDirection:'column',
            alignItems:'center',
            padding:'5% 10% 15% 10%',
            '&:hover': {
              backgroundColor: '#273812',
            },

          }
          
          }>
          <Typography gutterBottom variant="h5" component="div" >
            {title}
          </Typography>
          <Typography variant="body2" color="white" sx={{textAlign:'justify', padding:'5%'}}>
            {description}
          </Typography>

          <CardActions>
        <Button size="small" color="primary" sx={{border: 'white solid', color: 'white', whiteSpace:'nowrap', width:'100%', alignItems:'center', fontSize:'0.8rem' }}>
          Discover our location
        </Button>
      </CardActions>
        </CardContent>

      </CardActionArea>

    </Card>
  );
}