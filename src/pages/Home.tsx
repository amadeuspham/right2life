import React from 'react';
import './styles/Home.css';
import Button from '@material-ui/core/Button';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import {
  Link
} from "react-router-dom";
import {homepageTexts, subtitle} from "../data/homepage"
import EndangeredList from "../components/EndangeredList";
import ParagraphList from "../components/ParagraphList";
import Divider from '@material-ui/core/Divider';

function Home() {
  return (
    <div>
      <div className="home">
        <header className="home-header">
          Right2Life
        </header>
        <h3 className="subtitle">
          {subtitle}
        </h3>
        <ParagraphList
          paragraphs={homepageTexts}
        />
        <div className="help-button">
          <Button
            component={Link} 
            to={'/howtohelp'}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<FavoriteOutlinedIcon />}
            className="help-button"
          >
            Here's how to help
          </Button>
        </div>
        <Divider/>
        <div className="endangered-title">
          Endangered species
        </div>
        <EndangeredList/>
      </div>
      <div className="citation">
        (*) United Nations Office on Drugs And Crime, World Wildlife Crime Report. 
        Trafficking in protected species, 2020. Available at:
        <a rel="noopener noreferrer" href="https://www.unodc.org/documents/data-and-analysis/wildlife/2020/World_Wildlife_Report_2020_9July.pdf" target="_blank">
          https://www.unodc.org/documents/data-and-analysis/wildlife/2020/World_Wildlife_Report_2020_9July.pdf
        </a>
      </div>
    </div>
  );
}

export default Home;
