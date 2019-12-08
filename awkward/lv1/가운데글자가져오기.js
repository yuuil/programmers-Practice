function solution(s) {
  let mid = parseInt(s.length/2);
  if(s.length % 2) {
      return s[mid];
  } else {
      return s[mid-1] + s[mid];
  }
}