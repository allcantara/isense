import React from "react";

import gif from "../../assets/gif1.gif";

export default () => {
  return (
    <>
      <div className="col-12 text-center explanation">
        <div>
          <span>
            iSense e um serviço que atende as novas deficiências de uma
            sociedade em quarentena. uma experiência audiovisual parcialmente
            virtual simulada em um futuro distópico. iSense é um serviço que
            proporciona uma experiência de festa totalmente on-line para o
            cliente visando a saúde e as recomendações sanitárias do ministério
            da saúde como prioridade em reflexo ao isolamento social.
          </span>
        </div>
      </div>

      <div className="col-12 text-center mt-3 gif1-container">
        <img src={gif} className="img-fluid gif1" />
      </div>
    </>
  );
};
