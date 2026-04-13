// const { getTasks } = require("../src/utils");

// test('adds two numbers', () => {
//   expect(sum(2, 3)).toBe(5);
// })

// it('checks if the two added numbers are not 0', () => {
//   expect(sum(2, 3)).not.toBe(0);
// })

// it must expect
// if no expect, it fails

const { getTasks, addTask } = require("../src/utils");

it('should return empty array initially', () => {
    expect(getTasks()).toEqual([]);
});

it('should add the first task', () => {
    const taskData = { title: 'Buy milk' };
    const result = addTask(taskData);

    expect(result.title).toBe('Buy milk');
    expect(result.id).toBe(1);
});