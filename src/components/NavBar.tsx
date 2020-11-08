import React, {useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {
  Link
} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import endangeredAnimalsData from "../data/endangeredAnimals";
import OpenInNewOutlinedIcon from '@material-ui/icons/OpenInNewOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
      margin: "0.3em 5em",
      justifyContent: "space-between",
      paddingTop: "1em",
      paddingBottom: "1em"
    },
    navLeft: {
      
    },
    navRight: {
      textAlign: "right",
    },
    navCard: {
      textAlign: 'center',
      margin: "0 0.5em 0 0.5em",
      fontFamily: "'Raleway', sans-serif",
      fontWeight: "bold"
    },
    donateButton: {
      textAlign: 'center',
      margin: "0 0.5em 0 0.5em",
      backgroundColor: "#edae00",
      color: "white"
    },
    donateButtonHover: {
      textAlign: 'center',
      margin: "0 0.5em 0 0.5em",
      backgroundColor: "#bf8d02",
      color: "white"
    },
    noUnderline: {
      textDecoration: "none",
    }
  }),
);

function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [donateHover, setDonateHover] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <span className={classes.navLeft}>
        <Button component={Link} to={'/'} className={classes.navCard}>Home</Button>
        <Button onClick={handleClick} className={classes.navCard}>Endangered Animals</Button>
        <Menu
          id="animal-dropdown-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {endangeredAnimalsData.map(animalData => 
            <MenuItem 
              key={animalData.id} 
              component={Link} 
              to={`/${animalData.name.toLocaleLowerCase()}`}>{animalData.name}
            </MenuItem>
          )}
        </Menu>
        <Button component={Link} to={'/howtohelp'} className={classes.navCard}>How you can help</Button>
        <Button 
          component={Link} to={'/game'} 
          className={classes.navCard}
        >
            Game Demo
        </Button>
      </span>
      <span className={classes.navRight}>
        <a rel="noopener noreferrer" href="https://www.wwf.org.uk/reportingiwt" target="_blank" className={classes.noUnderline}>
          <Button 
            variant="contained"
            disableElevation
            color="secondary" 
            endIcon={<OpenInNewOutlinedIcon/>}
            className={classes.navCard}
          >
            Report a crime
          </Button>
        </a>
        <Button 
          variant="contained" 
          disableElevation 
          component={Link} to={'/donate'} 
          onMouseEnter={() => setDonateHover(true)}
          onMouseLeave={() => setDonateHover(false)}
          className={donateHover ? classes.donateButtonHover : classes.donateButton}
        >
            Donate
        </Button>
      </span>
    </div>
  );
}

export default NavBar;
