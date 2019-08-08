import { UserShortcutPipe } from './user-shortcut.pipe';

describe('UserShortcutPipe', () => {

  const pipe = new UserShortcutPipe();

  it('should return first letter and dot', () => {
    expect(pipe.transform('Mateusz')).toBe('M.');
  });

  it('should return empty string', () => {
    expect(pipe.transform('')).toBe('');
  });
});
