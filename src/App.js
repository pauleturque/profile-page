import React from "react";
import "./App.css";
import {
  faLocationDot,
  faGlobe,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlueProgressBar from "./components/BlueProgressBar";

function App() {
  return (
    <div className="principal-container">
      <div className="up-container">
        <img src="crop_image.jpg" alt="crop" />
      </div>
      <div className="down-container">
        <div className="colonne-logo">
          <img src="logo.jpg" alt="Logo" className="logo" />
          <button className="bouton">
            <img
              src="molecules-content-navigation-button-content-icon-and-text@2x.png"
              alt="pdf"
            />
          </button>
        </div>
        <div className="right-column">
          <div class="ligne1">
            <div className="title">Station F</div>
            <div className="icon">
              <i class="fas fa-ellipsis-h" />
            </div>
          </div>
          <div class="ligne2">
            <div className="icone-texte">
              <FontAwesomeIcon icon={faLocationDot} /> Paris, FR
            </div>
            <a href="#" className="icone-lien">
              <FontAwesomeIcon icon={faGlobe} /> www.demo.com
            </a>
            <div className="icone-group">
              <FontAwesomeIcon icon={faFacebookF} />{" "}
              <FontAwesomeIcon icon={faTwitter} />{" "}
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
              <img src="combined-shape.png" alt="icone" />{" "}
            </div>
          </div>
          <div class="ligne3">
            <p>
              Jubiwee est une application web qui mesure automatiquement le
              ressenti des collaborateurs, détecte les signaux faibles et
              populations à risque. Elle génère également des plans d’actions
              pour donner aux managers les meilleures actions pour réduire le
              turnover, l’absentéisme et améliorer l’engagement dans leur
              équipe.
            </p>
          </div>
          <div class="ligne4">
            <div className="tags-container">
              <img
                src="molecules-content-tag-left-b-igger@2x.png"
                alt="RH"
                className="tag"
              />
              <img
                src="molecules-content-tag-left@2x.png"
                alt="software"
                className="tag"
              />
              <img
                src="molecules-content-tag-left@2x 2.png"
                alt="hr"
                className="tag"
              />
            </div>
            <div className="right-elements">
              <button className="right-btn">SUIVRE</button>
              <button className="right-btn-1">PROFIL PUBLIC</button>
              <img src="info@2x.png" alt="hr" className="hr" />{" "}
            </div>
          </div>
          <div className="ligne5">
            <div className="l5-title">
              <p>
                Collaboration en discussion - POC{" "}
                <span>
                  <FontAwesomeIcon icon={faCaretRight} />
                </span>
              </p>
            </div>

            <BlueProgressBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
