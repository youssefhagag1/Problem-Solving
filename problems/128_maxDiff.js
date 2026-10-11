function maxDiff(root) {
  function findMin(root) {
    if (!root) return 0;

    const left = 1 + findMin(root.left);
    const right = 1 + findMin(root.right);

    return Math.min(left, right);
  }

  function findMax(root) {
    if (!root) return 0;

    const left = 1 + findMax(root.left);
    const right = 1 + findMax(root.right);

    return Math.max(left, right);
  }

  return findMax(root) - findMin(root);
}

const findNthLargest = (arr , n) => arr.sort((a , b) => a - b)[n - 1];

