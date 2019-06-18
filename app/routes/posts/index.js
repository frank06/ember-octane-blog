import Route from '@ember/routing/route';

export default class PostsIndexRoute extends Route {
  model() {
    return this.store.findAll('post');
  }
}