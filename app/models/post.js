import DS from 'ember-data';
const { Model, attr } = DS;

export default class PostModel extends Model {
  @attr() title;
  @attr() body;
  @attr('date') publishedAt;
  
  get formattedPublishedAt() {
    return this.publishedAt.toLocaleDateString("en-US");
  }
}