import React from 'react';
import './styles/Donate.css';
import PublicIcon from '@material-ui/icons/Public';
import {
  Link
} from "react-router-dom";

function Donate() {
  return (
    <div>
      <h2 className="donate-header">
        DONATE TO WILDLIFE ORGANIZATIONS
      </h2>
      <div className="organization-list">
        <a rel="noopener noreferrer" href="https://wwf.fi/lahjoita/liity-kummiksi/" target="_blank" className="no-default">
          <div className="organization">
            <PublicIcon style={{ fontSize: 100 }} />
          </div>
          <p className="organization">WWF Suomi (Finland)</p>
        </a>
        <a rel="noopener noreferrer" href="https://lp.panda.org/donate" target="_blank" className="no-default">
          <div className="organization">
            <PublicIcon style={{ fontSize: 100 }} />
          </div>
          <p className="organization">WWF Global</p>
        </a>
      </div>
      <div className="organization-list">
        <a rel="noopener noreferrer" href="https://faireundon.wwf.fr/b/mon-don" target="_blank" className="no-default">
          <div>
            <PublicIcon style={{ fontSize: 100 }} />
          </div>
          <p className="organization">WWF France</p>
        </a>
        <a rel="noopener noreferrer" href="https://support.worldwildlife.org/site/SPageServer?pagename=main_monthly&s_src=AWE2104OQ18299A01180RX" target="_blank" className="no-default">
          <div className="organization">
            <PublicIcon style={{ fontSize: 100 }} />
          </div>
          <p className="organization">WWF USA</p>
        </a>
      </div>
    </div>
  );
}

export default Donate;
