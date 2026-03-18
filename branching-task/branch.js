function branchingTask(task) {
  if (task === 'A') {
    return 'Task A completed';
  } else if (task === 'B') {
    return 'Task B completed';
  } else if (task === 'C') {
    return 'Task C completed';
  } else {
    return 'Unknown task';
  }
}

// Example usage:
console.log(branchingTask('A')); // Output: Task A completed
console.log(branchingTask('B')); // Output: Task B completed
console.log(branchingTask('C')); // Output: Task C completed
console.log(branchingTask('D')); // Output: Unknown task

