import 'font-awesome/css/font-awesome.css';
import {PLATFORM} from "aurelia-pal";
import {Router, RouterConfiguration} from 'aurelia-router';
import {computedFrom} from "aurelia-framework";

export class App {
  private router: any;
  
  @computedFrom('router', 'router.currentInstruction')
  get currentRouteTitle(): string {
    const activeNav = this.router.navigation.filter((n) => {return n.isActive;});    
    return activeNav.length > 0 ? activeNav[0].title : "";
  }
  
  constructor() {}
  
  configureRouter(config: RouterConfiguration, router: Router) {    
    config.title = 'Never Mind Games';    
    config.map([
      {
        route: ['/characterBuilder', ''], 
        name: 'characterSheet', 
        moduleId: PLATFORM.moduleName('characterBuilder'), 
        title: 'Character Sheet',
        nav: true,        
      },
      {
        route: '/difficultyCalculator',
        name: 'difficultyCalculator',
        moduleId: PLATFORM.moduleName('difficultyCalculator'),
        title: 'Combat Difficulty Calculator',
        nav: true,
      },
    ]);
    this.router = router;
  }
  
  boop(): void {
    this.router;
    debugger;
  }
}
