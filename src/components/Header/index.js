import React from "react";

import logotipo from "../../assets/logo.png";
import spotify from "../../assets/spotify.png";

export default () => {
  return (
    <div className="container-fluid">
      <div className="row mt-5 row-container">
        <div className="col-lg-7 col-md-6 text-center text-md-right">
          <img src={logotipo} alt="iSense" className="img-fluid logotipo" />
        </div>
        <div className="col-lg-5 col-md-6 mt-4 title-container">
          <span className="title">
            uma playlist minha feita para você::::: ouve aí, é só clicar
          </span>
          <a
            href="https://open.spotify.com/playlist/630vKXlmE4hOlREeHuQ4b3?si=621Q_tZHQxSDipI94CGEgw"
            rel="noreferrer"
          >
            <img src={spotify} alt="Spotify" className="img-fluid spotify" />
          </a>
        </div>
      </div>
    </div>
  );
};
