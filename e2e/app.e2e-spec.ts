import { TodolistPage } from './app.po';

describe('todolist App', () => {
  let page: TodolistPage;

  beforeEach(() => {
    page = new TodolistPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
