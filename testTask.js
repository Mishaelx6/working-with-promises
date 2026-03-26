const { runTasks } = require('./index.js');
 runTasks([
  () => console.log("A"),
  () => setTimeout(() => console.log("B (setTimeout)"), 0),
  async () => console.log("C (async)"),
  () => Promise.resolve().then(() => console.log("D (promise)")),
]);


