import React from "react";
import Article from "../Article";
import "./style.css";

function News() {
  return (
    <section className="news">
      <Article headline="News Headline" />
      <Article headline="News Headline" />
      <Article headline="Headline Beitrag 2021" isRelease={true} />
    </section>
  );
}

export default News;
