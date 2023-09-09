import 'font-awesome/css/font-awesome.css';
import {PLATFORM} from "aurelia-pal";

export class App {
  private router: any;
  
  configureRouter(config, router) {    
    config.title = 'Never Mind Games';
    
    config.map([
      {route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('characterBuilder')},
      {route: 'characterBuilder', name: 'characterBuilder', moduleId: PLATFORM.moduleName('characterBuilder')},
      //{route: 'users', name: 'users', moduleId: 'users/index', nav: true, title: 'Users'},
      //{route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail'},
      //{route: 'files/*path', name: 'files', moduleId: 'files/index', nav: 0, title: 'Files', href: '#files'}
    ]);
    
    this.router = router;
  }
}
