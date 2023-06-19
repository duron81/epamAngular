import { HideIfAuthenticatedDirective } from './hide-if-not-authenticated.directive';

describe('HideIfAuthenticatedDirective', () => {
  it('should create an instance', () => {
    const directive = new HideIfAuthenticatedDirective();
    expect(directive).toBeTruthy();
  });
});
