function solution(num, k) {
  let stack = [];
  const len = num.length;
  for(let i=0; i<len; i++) {
      if(!stack.length) {
          stack.push(num[i]);
          continue;
      }
      while(k && stack[stack.length - 1] < num[i]) {
          stack.pop();
          k--;
      }
      stack.push(num[i]);
  }
  stack.splice(-k, k);
  return stack.join("");
}