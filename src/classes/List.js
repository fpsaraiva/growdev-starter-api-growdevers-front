import Swal from "sweetalert2";

import api from "../services/api";

class List {
  constructor(token) {
    this.token = token;  

    this.list = document.querySelector("#users-list");

    this.growdeversRequest();
  }

  async growdeversRequest() {
    try {
      const options = {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      };

      const { data } = await api.get("/users", options);

      for (const user of data.users) {
        this.list.innerHTML += `<li class="list-group-item">${
          user.name} (${user.type})</li>`;
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Opa..',
        text: 'Ocorreu um erro ao buscar a lista',
      });

      return error;
    }
  }
}

export default List;