import MenuStore from "./menu";
import JoinStore from "./join";
import LoginStore from "./login";

class RootStore {
    constructor() {
      this.menu = new MenuStore(this);
      this.join = new JoinStore(this);
      this.login = new LoginStore(this);
    }
  }
  
  export default RootStore;