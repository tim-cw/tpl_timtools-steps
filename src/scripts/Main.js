import ComponentFactory from './ComponentFactory.js';
import Icons from './utils/Icons.js';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    // Une petite chose à faire ici.
    //new ComponentFactory();
  }
}
new Main();
