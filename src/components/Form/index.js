import React from "react";
import { api } from "../../services/api";

import { Message } from "../../utils";

export default () => {
  const { showMessage } = new Message();
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [brownieOrPudding, setBrownieOrPudding] = React.useState("");
  const [userInstagram, setUserInstagram] = React.useState("");
  const [telephoneNumber, setTelephoneNumber] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        !name ||
        !address ||
        !brownieOrPudding ||
        !userInstagram ||
        !telephoneNumber
      ) {
        showMessage("por favor, preencha todos os campos...");
        return;
      }

      const data = {
        name,
        address,
        brownieOrPudding,
        userInstagram,
        telephoneNumber,
      };

      const { status } = await api.post("/NovoCadastro", data);

      if (status !== 200) {
        showMessage("não foi possível cadastrar...");
        return;
      }

      setName("");
      setAddress("");
      setBrownieOrPudding("");
      setUserInstagram("");
      setTelephoneNumber("");

      showMessage("sua escolha foi registrada. valeu!");
    } catch (error) {
      console.error(error);
      showMessage("falha na requisição!");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form text-md-right">
      <div>
        <span>nome::::::::</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <span>endereço::::::::</span>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <span>brownie ou pudim::::::::</span>
        <input
          type="text"
          value={brownieOrPudding}
          onChange={(e) => setBrownieOrPudding(e.target.value)}
        />
      </div>
      <div>
        <span>user intagram::::::::</span>
        <input
          type="text"
          value={userInstagram}
          onChange={(e) => setUserInstagram(e.target.value)}
        />
      </div>
      <div>
        <span>telefone celular::::::::</span>
        <input
          type="text"
          value={telephoneNumber}
          onChange={(e) => setTelephoneNumber(e.target.value)}
        />
      </div>
      <button type="submit" className="button-submit mt-2">
        <span className="text-button">{`{enviar}`}</span>
      </button>
    </form>
  );
};
