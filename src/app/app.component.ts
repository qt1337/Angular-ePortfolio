import {Component} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular ePortfolio';
  particlesOptions = {
    background: {
      color: {
        value: '#2d3436'
      }
    },
    fpsLimit: 144,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onClick: {
          enable: true,
          mode: 'repulse'
        },
        onHover: {
          enable: true,
          mode: 'slow'
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40,
          speed: 3
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#dfe6e9',
        animation: {
          enable: true,
          speed: 50,
          sync: false
        }
      },
      links: {
        color: '#dfe6e9',
        distance: 137,
        enable: true,
        opacity: 0.5,
        width: 1,
        animation: {
          enable: true,
          speed: 50,
          sync: false
        }
      },
      collisions: {
        enable: true
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          value_area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'square'
      },
      size: {
        random: true,
        value: 5
      }
    },
    detectRetina: true
  };

  constructor(public location: Location) {
  }
}
