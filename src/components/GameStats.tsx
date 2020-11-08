import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "2em"
    },
    instruction: {
      textAlign: "center"
    },
    slot: {
      padding: theme.spacing(2),
      textAlign: 'center',
      flexDirection: "column"
    },
    content: {
      display: "flex",
      height: "100%",
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: "24px"
    },
    bigText: {
      fontSize: "24px"
    },
    modelImg: {
      maxWidth: "200px",
      height: "auto",
      marginTop: "20px"
    }
  }),
);

function GameStats(props: GameStatsProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={6} className={classes.slot}>
          <div className={classes.instruction}>
            You need to look for 5 pangolins
          </div>
          <img 
            src={process.env.PUBLIC_URL + "game/pangolin_model.png"} 
            alt="model pangolin"
            className={classes.modelImg}
          />
        </Grid>
        <Grid item xs={6} sm={6} className={classes.slot}>
          <div>
            Number of pangolins found
          </div>
          <div  className={classes.content}>
            {props.foundNum}/3
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

interface GameStatsProps {
  foundNum: Number
}

export default GameStats;
