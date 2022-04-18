import React from "react";
import "./style.css";

function Member({ member, zIndex }) {
  return (
    <div className="member" key={member.name} style={{ zIndex: zIndex }}>
      <img src={member.image} alt="" />
      <div className="member-info">
        <p className="display-2">{member.name}</p>
        <p>{member.duties}</p>
      </div>
    </div>
  );
}

export default Member;
