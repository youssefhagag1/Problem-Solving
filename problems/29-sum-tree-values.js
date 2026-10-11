// Sum tree values - sum all values in a binary tree using DFS
function sumTheTreeValues(root) {
  let sum = 0;

  function dfs(node) {
    if (node !== null) {
      sum += node.value;
      dfs(node.left);
      dfs(node.right);
    }
  }
  dfs(root);
  return sum;
}