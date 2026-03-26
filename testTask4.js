

const { runTasks } = require('./index.js');

function blockCPU() {
  const start = Date.now();
  while (Date.now() - start < 3000) {} // block for 3s
}
runTasks([
  () => console.log("Start"),
  () => blockCPU(),
  () => Promise.resolve().then(() => console.log("Promise")),
  () => setTimeout(() => console.log("Timeout"), 0),
]);
