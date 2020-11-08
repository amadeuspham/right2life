import React from 'react';
import '../styles/Animal.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PetsIcon from '@material-ui/icons/Pets';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import elephantStory from "../../data/elephantStory";
import elep1 from '../../data/stories/elephant/elep1.jpg';
import elep2 from '../../data/stories/elephant/elep2.jpg';
import elep3 from '../../data/stories/elephant/elep3.jpg';
import elep4 from '../../data/stories/elephant/elep4.jpg';
import elep5 from '../../data/stories/elephant/elep5.jpg';
import elep6 from '../../data/stories/elephant/elep6.jpg';
import elep7 from '../../data/stories/elephant/elep7.jpg';
import { useHistory } from "react-router-dom";

function Elephant() {
  const history = useHistory();

  function handleClickHelp() {
    history.push('/howtohelp')
  }

  return (
    <div>
      <header className="animal-header">
        ELEPHANT
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext1}</p>
          <img src={elep1} alt="pangolin story 1" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext2}</p>
          <img src={elep2} alt="pangolin story 2" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext3}</p>
          <img src={elep3} alt="pangolin story 3" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext4}</p>
          <img src={elep4} alt="pangolin story 4" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext5}</p>
          <img src={elep5} alt="pangolin story 5" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext6}</p>
          <img src={elep6} alt="pangolin story 6" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{elephantStory.eleptext7}</p>
          <img src={elep7} alt="pangolin story 7" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#f44336', color: '#fff' }}
          icon={<FavoriteOutlinedIcon />}
          iconOnClick={handleClickHelp}
        >
          <p>Click here to find out how you can help.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Elephant;
