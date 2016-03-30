import angular from 'angular';
import uiRouter from 'angular-ui-router';
import heroComponent from './hero.component';
import HeroModalController from './heroModal.controller';

let heroModule = angular.module('hero', [
  uiRouter,
])
.component('hero', heroComponent)
.controller('HeroModalController', HeroModalController);

export default heroModule;
