import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Code+';
    config.map([
      { route: ['','home'], name: 'home', moduleId: './pages/home/index', nav: true, title:'Home' },
      { route: ['story'], name: 'story', moduleId: './pages/story/index', nav: true, title:'Story' },
      { route: ['resume'], name: 'resume', moduleId: './pages/resume/positions', nav: true, title:'Resume',
        settings: {
          subMenu: [
            { href: '#/resume/experience', title: 'Experience' },
            { href: '#/resume/education', title: 'Education' }
          ]
        }
      },
      { route: ['resume/experience'], name: 'experience', moduleId: './pages/resume/experience', nav: false, title:'Experience' },
      { route: ['resume/education'], name: 'education', moduleId: './pages/resume/education', nav: false, title:'Education' }
    ]);
    
    this.router = router;
    $(".dropdown-button").dropdown();    
  }
}