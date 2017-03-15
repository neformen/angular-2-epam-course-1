import { NgCoursePage } from './app.po';

describe('ng-course App', () => {
  let page: NgCoursePage;

  beforeEach(() => {
    page = new NgCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
