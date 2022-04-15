import React from "react";
import "./style.css";

import backgroundImage from "../../assets/map.svg";

function Article({ isRelease }) {
  if (!isRelease)
    return (
      <article>
        <p className="article-date">23 Mai 2021</p>
        <h2>News Headline</h2>
        <p className="article-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          recusandae doloremque consequuntur repellendus corporis libero!
        </p>
      </article>
    );

  return (
    <article
      className="release"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className="article-date">17 Mai</p>
      <h2>Headline Beitrag 2021</h2>
      <h3>Subtitle</h3>
      <p className="article-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
        recusandae doloremque consequuntur repellendus corporis libero!
      </p>
    </article>
  );
}

export default Article;
