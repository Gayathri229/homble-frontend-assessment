import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [seeInfo, setSeeInfo] = useState(false);

  const handleAccordionOpen = () => {
    setSeeInfo(!seeInfo);
  };

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-title" onClick={handleAccordionOpen}>
          <p>{title}</p>
          <div className="accordion-expand-collapse">{seeInfo ? "-" : "+"}</div>
        </div>
        {seeInfo && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
