// function sum(a, b) {
//     return a + b;
// }

let tasks = [];

function getTasks() {
  // TODO
  return tasks;
}

function addTask(taskData) {
  const task = { id: tasks.length + 1, ...taskData };
  tasks.push(task);
}

module.exports = { getTasks, addTask };
