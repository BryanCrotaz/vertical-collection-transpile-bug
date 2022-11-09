import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  get items() {
    return ['a', 'b'];
  }
}
