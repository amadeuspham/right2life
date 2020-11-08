import React from 'react';
import howToHelpTexts from "../data/howToHelp"
import ParagraphList from "../components/ParagraphList";
import "./styles/HowHelp.css"

function HowHelp() {
  return (
    <div>
      <header className="help-header">
        WAYS THAT YOU CAN HELP(*)
      </header>
      <ParagraphList
        paragraphs={howToHelpTexts}
      />
      <div className="citation">
        (*) Zoological Society of London, 
        7 things you can do to help prevent the Illegal Wildlife Trade, May 15th, 2019. Available at:
        <a rel="noopener noreferrer" href="https://www.zsl.org/blogs/conservation/7-things-you-can-do-to-help-prevent-the-illegal-wildlife-trade" target="_blank">
        https://www.zsl.org/blogs/conservation/7-things-you-can-do-to-help-prevent-the-illegal-wildlife-trade
        </a>
      </div>
    </div>
  );
}

export default HowHelp;
