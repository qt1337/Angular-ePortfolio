import {Topic} from './topic';

export const TOPICS: Topic[] = [
  {
    id: 0,
    name: 'start',
    container_left: ['What is Angular?', 'How is the structure of an Angular app?', 'Why should you use Angular?', 'What do you need for Angular?', 'Who uses Angular?'],
    container_left_title: 'Agenda',
    container_right: [''],
    container_right_title: ''
  },
  {
    id: 1,
    name: 'angular',
    container_left: ['Frontend Web-Framework', 'written with TypeScript', 'Open-Source', 'not AngularJS'],
    container_left_title: 'What is Angular?',
    container_right: ['Maintainer: Google LLC', 'Developer: Google LLC & Community', 'Release: 2016', 'Current Version: 10.2.2'],
    container_right_title: 'Some Facts'
  },
  {
    id: 2,
    name: 'typical angular app',
    container_left: ['Database: MongoDB', 'App Server: Express.js', 'Server runtime environment: Node.js', 'Frontend: Angular'],
    container_left_title: 'Structure',
    container_right: [''],
    container_right_title: ''
  },
  {
    id: 3,
    name: 'why angular?',
    container_left: ['Platform independent', 'High Performance', 'Component-based architecture', 'TypeScript'],
    container_left_title: 'PRO',
    container_right: ['Declining number of developers (2018: 2nd Place 🡒 2019: 9th Place)', 'Migrating takes time', 'Complexity'],
    container_right_title: 'CON'
  },
  {
    id: 4,
    name: 'examples',
    container_left: ['Google Apps (Gmail and so on)', 'Microsoft Office', 'Deutsche Bank', 'PayPal'],
    container_left_title: 'Who uses Angular?',
    container_right: [''],
    container_right_title: ''
  },
  {
    id: 5,
    name: 'requirements',
    container_left: ['JavaScript', 'HTML', 'CSS'],
    container_left_title: 'What should you know?',
    container_right: ['Node.js', 'npm package manager', '"npm install -g @angular/cli"'],
    container_right_title: 'What you need to install:'
  },
];
