function solution(num, k) {
  const stack = [];
  const len = num.length;
  for(let i=0; i<len; i++) {
      while(k && stack.length && stack[stack.length - 1] < num[i]) {
          stack.pop();
          k--;
      }
      stack.push(num[i]);
  }
  return stack.join("").slice(0, stack.length-k);
}