import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//sx props can change styling.


export default function ImgMediaCard(props) {
  return (
    <div style={{ backgroundColor: "#B5E0DF", padding:"30"}}>
    <h1 style={{ marginTop: "30", color: "#5FA0A4"}}>Hello {props.name}</h1>

    <h2 style={{ color: "#B3A497", marginTop: "80", textAlign: "left",
  fontSize: "2"}}>Order History</h2>

    <Card sx={{ maxWidth: 680, backgroundColor: "#e0f5f4", padding:"15"}}>
      <CardMedia
        component="img"
        alt="memory"
        height="200"
        image={props.url}
        style={{ display: "inline"}}
      
      />
      <div style={{ textAlign: "right", color: "#5FA0A4" }}>
      <CardContent style={{ textAlign: "right"}}>
        <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "right", color: "#5FA0A4" }}>
          Climbing K2 {props.memoryTitel}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{ color: "#5FA0A4" }}>
          The snow was sparkling..{props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ backgroundColor: "#5FA0A4", color: "#e0f5f4" }}>Experience again</Button>
        <Button size="small" style={{ backgroundColor: "#5FA0A4", color: "#e0f5f4" }}>Share</Button>
      </CardActions>
      </div>
    </Card>
    </div>
  );
}
