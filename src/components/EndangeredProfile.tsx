import React from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "2em 0 2em 0"
  },
  profileRow: {
    display: "flex",
    justifyContent: "space-around"
  },
  chartImg: {
    height: "370px",
    paddingTop: "25px",
  },
  chartCaption: {
    fontFamily: "'Raleway', sans-serif",
    fontStyle: "italic",
    color: "#696969",
    width: "500px"
  }
});

function EndangeredProfile(props: EndangeredAvatarProps) {
  const classes = useStyles();

  return (
    <div className={classes.profileRow}>
      <Card className={classes.card}>
        <CardActionArea component={Link} to={'/' + props.name.toLowerCase()}>
          <CardMedia
            component="img"
            alt={props.name}
            height="300"
            image={process.env.PUBLIC_URL + props.imgName} 
            title={props.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Native to {props.country}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div>
        <img 
          className={classes.chartImg} 
          src={process.env.PUBLIC_URL + props.statsImgName} 
          alt={"chart-" + props.name}
        />
        <p className={classes.chartCaption}>{props.statsCaption}</p>
      </div>
    </div>
  );
}

interface EndangeredAvatarProps {
  name: string;
  country: string;
  imgName: string;
  statsImgName: string;
  statsCaption: string
}

export default EndangeredProfile;
