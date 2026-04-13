// const { sum } = require("../src/utils");

// // test('describe', function())
// // it('describe', function())

// it('adds two numbers', () => {
//     expect(sum(2, 3)).toBe(5);
// });

// // it.only('checks if the two added numbers are not 0', () => {
// it('checks if the two added numbers are not 0', () => {
//     expect(sum(2, 3)).not.toBe(0);
// });

const { getTasks, addTask, clearTasks } = require("../src/utils");

beforeEach(() => {
    clearTasks();
});

it('should return empty array initially', () => {
    expect(getTasks()).toEqual([]);
});

it('should add the first task', () => {
    const taskData = { title: 'Buy milk' };
    const result = addTask(taskData);

    expect(result.title).toBe('Buy milk');
    expect(result.id).toBe(1);
});