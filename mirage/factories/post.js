import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({

  title() {
    return faker.lorem.sentence();
  },

  body() {
    return faker.lorem.paragraph();
  },

  publishedAt() {
    return faker.date.past();
  }

});