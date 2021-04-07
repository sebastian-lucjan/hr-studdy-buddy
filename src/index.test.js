const add = (a, b) => {
  return a + b;
};

test('Add two digits', () => {
  expect(add(34, 12)).toBe(46);
  expect(add(34, 12)).not.toBe(1);
});

const usersList = ['sebastian', 'marysia', 'małe bobo', 'większe bobo'];

it('usersList contains unexpected items', () => {
  expect(usersList).toContain('sebastian');
  expect(usersList).not.toContain('apples');
});
