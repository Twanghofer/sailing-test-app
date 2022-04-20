import React, { useEffect, useState } from "react";
import "./style.css";

import backgroundImage from "../../assets/map2.svg";
import { FaRegCalendarAlt } from "react-icons/fa";
import ArticleOverlay from "./ArticleOverlay";

function Article({ headline, isRelease }) {
  const [articleOpen, setArticleOpen] = useState(false);

  useEffect(() => {
    if (articleOpen) {
      document.body.classList.add("overflow-hidden");
      return;
    }
    document.body.classList.remove("overflow-hidden");
  }, [articleOpen]);

  return (
    <>
      <article
        className={isRelease ? "release" : ""}
        style={{ backgroundImage: isRelease ? `url(${backgroundImage})` : "" }}
        onClick={() => setArticleOpen(true)}
      >
        <p className="article-date">
          <FaRegCalendarAlt className="icon" />
          17 Mai
        </p>
        <h2>{headline}</h2>
        {isRelease ? <h3>Subtitle</h3> : ""}
        <p className="article-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          recusandae doloremque consequuntur repellendus corporis libero!
        </p>
      </article>
      {articleOpen ? (
        <ArticleOverlay closeFunction={() => setArticleOpen(false)} />
      ) : (
        ""
      )}
    </>
  );
}

export default Article;
