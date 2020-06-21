import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Preview from './views/Preview.vue'
import Tutorial from './views/Tutorial.vue'
import Recipe from './views/Recipe.vue'
import Page from './views/Page.vue'
import Games from './views/Games.vue'
import Development from './views/Development.vue'
import Recipes from './views/Recipes.vue'
import Game from './views/Game.vue'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/tutorial',
      redirect: { name: 'tutorial' }
    },
    {
      path: '/recipe/:uid',
      name: 'Recipe',
      component:  Recipe
    },
    {
      path: '/',
      name: 'Home',
      component:  Home
    },
    {
      path: '/page/:uid',
      name: 'page',
      component: Page
    },
    {
      path: '/game/:uid',
      name: 'game',
      component: Game
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/development',
      name: 'development',
      component: Development
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: Recipes
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '/tutorial',
      name: 'tutorial',
      component: Tutorial
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
