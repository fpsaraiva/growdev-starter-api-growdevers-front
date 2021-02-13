import Swal from "sweetalert2";

import api from '../services/api';

class Login {
  constructor() {
    this.user = document.querySelector("#loginModal #loginUser");
    this.password = document.querySelector("#loginModal #loginPassword");

    this.btnLogin = document.querySelector("#loginModal #login-btn");

    this.registerEvent();
  }

  registerEvent() {
    this.btnLogin.onclick = () => this.loginRequest();
  }

  async loginRequest() {
    try {
      const body = {
        username: this.user.value,
        password: this.password.value,
      }

      const { data } = await api.post("/login", body);

      console.log(data);

      Swal.fire(
        'Parabéns!',
        'Login realizado com sucesso!',
        'success'
      );

      return data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Opa..',
        text: 'Ocorreu um erro no login',
      });

      return error;
    }
  }
}

export default Login;