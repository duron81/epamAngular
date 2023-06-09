import { DurationPipePipe } from './duration-pipe.pipe';

describe('DurationPipePipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipePipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert to 30 min', () => {
    const pipe = new DurationPipePipe();
    expect(pipe.transform(30)).toBe('30min');
  });
});


