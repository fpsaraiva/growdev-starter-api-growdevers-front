import CreateAccount from "./classes/CreateAccount";
import Login from "./classes/Login";

class App {
  constructor() {
    this.CreateAccountModal = new CreateAccount();
    this.Login = new Login();
  }
}

new App();