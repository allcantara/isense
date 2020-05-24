import React from "react";

import video from "../../assets/video.mp4";

export default () => {
  return (
    <div className="row row-video-container">
      <section className="col-md-6">
        <video
          className="img-fluid video"
          controls="controls"
          autoPlay="autoplay"
          src={video}
        />
      </section>
      <section className="col-md-6 mt-3 mt-md-0">
        <div className="intro">
          <span>
            todos nós fomos pegos de surpresa.
            <br />
            uma quarentena súbita e emergencial
            <br />
            nos afastou daquilo que mal sabíamos
            <br />
            que sentiríamos falta.
            <br />
            <br />
            não houve tempo para juntarmos reservas,
            <br />
            registrarmos lembranças ou darmos
            <br />
            abraços de despedidas.
          </span>
        </div>
      </section>
    </div>
  );
};
