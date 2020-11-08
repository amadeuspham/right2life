import React from 'react';
import '../styles/Animal.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PetsIcon from '@material-ui/icons/Pets';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import pangolinStory from "../../data/pangolinStory";
import pang1 from '../../data/stories/pangolin/pang1.jpg';
import pang2 from '../../data/stories/pangolin/pang2.jpg';
import pang3 from '../../data/stories/pangolin/pang3.jpg';
import pang4 from '../../data/stories/pangolin/pang4.jpg';
import pang5 from '../../data/stories/pangolin/pang5.jpg';
import pang6 from '../../data/stories/pangolin/pang6.jpg';
import pang7 from '../../data/stories/pangolin/pang7.jpg';
import { useHistory } from "react-router-dom";

function Pangolin() {
  const history = useHistory();

  function handleClickHelp() {
    history.push('/howtohelp')
  }

  return (
    <div>
      <header className="animal-header">
        PANGOLIN
      </header>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext1}</p>
          <img src={pang1} alt="pangolin story 1" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext2}</p>
          <img src={pang2} alt="pangolin story 2" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext3}</p>
          <img src={pang3} alt="pangolin story 3" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext4}</p>
          <img src={pang4} alt="pangolin story 4" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext5}</p>
          <img src={pang5} alt="pangolin story 5" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext6}</p>
          <img src={pang6} alt="pangolin story 6" className="animal-image"/>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#ededed', fontFamily: "'Raleway', sans-serif" }}
          contentArrowStyle={{ borderRight: '7px solid #ededed' }}
          iconStyle={{ background: '#b08100', color: '#fff' }}
          icon={<PetsIcon />}
        >
          <p>{pangolinStory.pangtext7}</p>
          <img src={pang7} alt="pangolin story 7" className="animal-image"/>
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

export default Pangolin;
