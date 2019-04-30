import { TestWindow } from '@stencil/core/testing';
import { Dropdown } from './dropdown';

describe('dropdown', () => {
  it('should build', () => {
    expect(new Dropdown()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLDropdownElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [Dropdown],
        html: '<dropdown></dropdown>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
