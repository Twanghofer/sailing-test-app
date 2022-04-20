import React from "react";
import "../style.css";
import "./style.css";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import ArticleImage from "../../../assets/ship_2.jpg";
import {
  FaRegCalendarAlt,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
} from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

function ArticleOverlay({ closeFunction }) {
  return (
    <>
      <div className="article-overlay" onClick={closeFunction}>
        <div className="article-content" onClick={(e) => e.stopPropagation()}>
          <div className="article-actions">
            <button onClick={closeFunction}>
              <VscChromeClose />
            </button>
            <a href="#" className="button">
              <FaFacebookF />
            </a>
            <a href="#" className="button">
              <FaTwitter />
            </a>
            <a href="#" className="button">
              <FaGooglePlusG />
            </a>
          </div>
          <div className="article-container">
            <article>
              <div className="article-head">
                <p className="article-date">
                  <FaRegCalendarAlt className="icon" />
                  23. Mai 2021
                </p>
                <h2 className="display-1">Newsartikel Headline</h2>
                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                <hr />
              </div>
              <p>
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit.
                Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
                ut aliquam massa nisl quis neque. Suspendisse in orci enim.
                <br />
                <br />
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit.
                Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
                ut aliquam massa nisl quis neque. Suspendisse in orci enim.
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
                <br />
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              </p>
              <AliceCarousel mouseTracking infinite disableDotsControls>
                <img src={ArticleImage} alt="Ship" />
                <img src={ArticleImage} alt="Ship" />
              </AliceCarousel>
              <p>
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu
                felis dapibus condimentum sit amet a augue. Sed non neque elit.
                Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam
                pharetra, erat sed fermentum feugiat, velit mauris egestas quam,
                ut aliquam massa nisl quis neque. Suspendisse in orci enim.
                Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet
                nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum
                velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                non mauris vitae erat consequat auctor eu in elit. Class aptent
                taciti sociosqu ad litora torquent per conubia nostr.
              </p>
              <br />
              <br />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleOverlay;
