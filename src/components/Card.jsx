import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({title, description}) {
  return (
    <Card sx={{ maxWidth: '50%', margin: '30% 30%', justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column'
     }}>
      <CardActionArea sx={{display:'flex', flexDirection:'column'}}>
        <CardMedia
          component="img"
          height="140"
          image="src\assets\images\pexels-mikhail-nilov-8430908.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" sx={{border: '#FFF solid'}}>
          Discover our location
        </Button>
      </CardActions>
    </Card>
  );
}