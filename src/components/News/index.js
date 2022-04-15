import React from "react";
import Article from "../Article";
import "./style.css";

function News() {
  return (
    <section className="news">
      <Article />
      <Article />
      <Article isRelease={true} />
    </section>
  );
}

export default News;
