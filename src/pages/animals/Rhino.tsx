import React from 'react';
import '../styles/Animal.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PetsIcon from '@material-ui/icons/Pets';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import rhinoStory from "../../data/rhinoStory";
import rhino1 from '../../data/stories/rhino/rhino1.png';
import rhino2 from '../../data/stories/rhino/rhino2.jpg';
import rhino3 from '../../data/stories/rhino/rhino3.jpg';
import rhino4 from '../../data/stories/rhino/rhino4.jpg';
import rhino5 from '../../data/stories/rhino/rhino5.jpg';
import rhino6 from '../../data/stories/rhino/rhino6.jpg';
import { useHistory } from "react-router-dom";

function Elephant() {
  const history = useHistory();

  function handleClickHelp() {
    history.push('/howtohelp')
  }

  return (
    <div>
      <header className="animal-header">
        RHINO
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{rhinoStory.rhinotext1}</p>
          <img src={rhino1} alt="pangolin story 1" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{rhinoStory.rhinotext2}</p>
          <img src={rhino2} alt="pangolin story 2" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{rhinoStory.rhinotext3}</p>
          <img src={rhino3} alt="pangolin story 3" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{rhinoStory.rhinotext4}</p>
          <img src={rhino4} alt="pangolin story 4" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{rhinoStory.rhinotext5}</p>
          <img src={rhino5} alt="pangolin story 5" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed' }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{rhinoStory.rhinotext6}</p>
          <img src={rhino6} alt="pangolin story 6" className="animal-image"/>
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
