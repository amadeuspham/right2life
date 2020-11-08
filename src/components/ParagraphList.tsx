import React from "react";
import "./styles/ParagraphList.css"
var classNames = require('classnames');

function Paragraph(props: ParagraphProps) {
  const isEven = props.index % 2 == 0;
  var paraClasses = classNames({
    'paragraph': true,
    'paragraph-even': isEven,
    "paragraph-odd": !isEven,
  });
  return (
    <div className={paraClasses}>
      <div className="visual">

      </div>
      <div className="text">
        <div className="title">
          {props.title}
        </div>
        <div className="body">
          {props.body}
        </div>
      </div>
    </div>
  )
}

function ParagraphList(props: ParagraphListProps) {
  return (
    <div>
      {props.paragraphs.map((paragraph, index) => 
        <Paragraph 
          key={paragraph.id} 
          title={paragraph.title} 
          body={paragraph.body} 
          index={index}
        />
      )}
    </div>
  )
}

interface ParagraphInfo {
  id: number,
  title: string,
  body: string
}

interface ParagraphProps {
  title: string,
  body: string,
  index: number,
}

interface ParagraphListProps {
  paragraphs: Array<ParagraphInfo>
}

export default ParagraphList;