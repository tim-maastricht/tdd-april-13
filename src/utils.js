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
  return task;
}

function clearTasks() {
  tasks.length = 0;
}

module.exports = { getTasks, addTask, clearTasks };
