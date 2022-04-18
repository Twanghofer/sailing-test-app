import React, { useEffect, useState } from "react";
import "./style.css";

import Member from "../Member/";

function Team() {
  const API_BASE_URL = "https://challenge-api.view.agentur-loop.com/api.php?";
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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  //get new members when filter changes
  useEffect(() => {
    setPage(1);
    getCrewMembers(1).then((members) => {
      setTeam(members);
    });
  }, [activeFilter]);

  useEffect(() => {
    if (page === 1) return;
    getNextMembers(page);
  }, [page]);

  const getNextMembers = (page) => {
    getCrewMembers(page).then((members) => {
      if (members.length < 5) {
      }
      setTeam(team.concat(members));
    });
  };

  const getCrewMembers = async (page = 1) => {
    let url = API_BASE_URL;

    url += `page=${page}&`;
    if (activeFilter.duty) url += `duty=${activeFilter.duty}`;

    const response = await fetch(url);
    const data = await response.json();

    setTotalPages(data.data.meta.pagination.total_pages);
    return data.data.data;
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
          <Member member={member} zIndex={team.length - i} />
        ))}
      </div>
      <button
        className={page === totalPages ? "hidden" : ""}
        onClick={() => setPage(page + 1)}
      >
        Load more
      </button>
    </section>
  );
}

export default Team;
