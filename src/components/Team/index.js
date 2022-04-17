import React, { useEffect, useState } from "react";
import "./style.css";

import axios from "axios";

function Team() {
  const baseURL = "https://challenge-api.view.agentur-loop.com/api.php?";
  const [page, setPage] = useState(1);
  const [team, setTeam] = useState([]);
  const filters = [
    {
      name: "Show all",
      duty: null,
    },
    {
      name: "Trim",
      duty: "trim",
    },
    {
      name: "Tactic",
      duty: "tactic",
    },
    {
      name: "Helmsman",
      duty: "helmsman",
    },
  ];
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  //get new members when filter changes
  useEffect(() => {
    setPage(1);
    getCrewMembers().then((members) => setTeam(members));
  }, [activeFilter]);

  useEffect(() => {
    setPage(page + 1);
  }, []);

  const getNextMembers = () => {
    setPage(page + 1);
    let currentTeam = team;
    getCrewMembers().then((members) => {
      setTeam(currentTeam.concat(members));
    });
  };

  const getCrewMembers = async () => {
    let url = baseURL;

    url += `page=${page}&`;
    if (activeFilter.duty) url += `duty=${activeFilter.duty}`;
    console.log(url);
    const get = await axios.get(url);
    return get.data.data.data;
  };

  return (
    <section className="team">
      <h2 className="display-1">Unser Team</h2>
      <h3>Subtitles von unserem Team</h3>
      <hr />
      <div className="member-filter">
        {filters.map((filter) => (
          <p
            className={filter.duty === activeFilter.duty ? "selected" : ""}
            onClick={() => setActiveFilter(filter)}
            key={filter.name}
          >
            {filter.name}
          </p>
        ))}
      </div>
      <div className="member-list">
        {team.map((member, i) => (
          <div
            className="member"
            style={{ zIndex: team.length - i }}
            key={member.name}
          >
            <img src={member.image} alt="" />
            <div className="member-info">
              <p className="display-2">{member.name}</p>
              <p>{member.duties}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => getNextMembers()}>Load more</button>
    </section>
  );
}

export default Team;
