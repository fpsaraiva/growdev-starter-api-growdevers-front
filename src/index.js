import api from "./services/api";

import CreateAccount from "./classes/CreateAccount";

class App {
  constructor() {
    this.CreateAccountModal = new CreateAccount();

  }
}

new App();