import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { api } from "../services/api";

import { Message } from "../utils";

export default () => {
  const [list, setList] = React.useState([]);
  const { showMessage } = new Message();

  React.useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getList() {
    try {
      const res = await api.get("/GetCadastrados");
      if (res.status !== 200) {
        showMessage("falha ao buscar a lista de usuários!");
        return;
      }

      setList([...res.data]);
    } catch (error) {
      console.error(error);
      showMessage("falha na requisição!");
    }
  }

  async function handleDelete({ id }) {
    try {
      const res = await api.delete(`/RemoveCadastroById?IdCadastro=${id}`);
      if (res.status !== 200) {
        showMessage("não foi possível excluir...");
        return;
      }
      showMessage("item excluido com sucesso!");
      getList();
    } catch (error) {
      console.error(error);
      showMessage("falha na requisição...");
    }
  }

  function ListItem({ data }) {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="list-item">
          <span>nome:::</span>
          <p>{data.name}</p>
          <span>endereço::::</span>
          <p>{data.address}</p>
          <span>brownie ou pudim:::::::</span>
          <p>{data.brownieOrPudding}</p>
          <span>user instagram::::</span>
          <p>{data.userInstagram}</p>
          <span>telefone celular:::::</span>
          <p>{data.telephoneNumber}</p>
          <FontAwesomeIcon
            icon={faTrash}
            className="trash"
            onClick={() => handleDelete(data)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid">
      <div className="row p-2">
        {list.map((item, index) => (
          <ListItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};
