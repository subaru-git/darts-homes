import CountDrill from './CountDrill';

describe('CountDrill', () => {
  const originalRandom = Math.random;
  beforeEach(() => {
    Math.random = jest.fn().mockReturnValue(0.3);
  });
  afterEach(() => {
    Math.random = originalRandom;
  });
  it('in gaming', () => {
    const game = new CountDrill();
    expect(game.getLeftNumber()).toBe(151);
    expect(game.getThrows()).toEqual([7]);
    game.throw();
    expect(game.getThrows()).toEqual([7, 7]);
    game.throw();
    expect(game.getThrows()).toEqual([7, 7, 7]);
    game.throw();
    expect(game.getThrows()).toEqual([7, 7, 7]);
    expect(game.call()).toBe(21);
  });
  it('do not reach to bust', () => {
    Math.random = jest
      .fn()
      .mockReturnValueOnce(0.1)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.1);
    const game = new CountDrill();
    expect(game.getLeftNumber()).toBe(51);
    expect(game.getThrows()).toEqual([26]);
    game.throw();
    expect(game.getThrows()).toEqual([26, 11]);
    game.throw();
    expect(game.getThrows()).toEqual([26, 11, 4]);
    expect(game.call()).toBe(41);
  });
  it('do not reach to bust more small left number', () => {
    Math.random = jest
      .fn()
      .mockReturnValueOnce(0.01)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.3)
      .mockReturnValueOnce(0.2)
      .mockReturnValueOnce(0.1);
    const game = new CountDrill();
    expect(game.getLeftNumber()).toBe(6);
    expect(game.getThrows()).toEqual([2]);
    game.throw();
    expect(game.getThrows()).toEqual([2, 2]);
    game.throw();
    expect(game.getThrows()).toEqual([2, 2, 1]);
    expect(game.call()).toBe(5);
  });
});
