/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useHistory } from "react-router";

import gifLogin from "../../assets/login.gif";

export default () => {
  const history = useHistory();

  return (
    <footer className="col-12 text-center">
      <div className="footer-div mb-3">
        <span>
          a falta de presença não será suprida. e essa falta nos faz lembrar o
          que somos: somos feitos uns dos outros.
          <br />
          <br />
          <br />
        </span>
        <span>
          um convite bem incomum mas com bastante carinho de{" "}
          <span onClick={() => history.push("/list")}>roger</span> para você. :)
        </span>
        <div>
          <img src={gifLogin} className="img-fluid gif-2" />
        </div>
      </div>
    </footer>
  );
};
