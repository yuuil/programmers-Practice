function solution(progresses, speeds) {
  var answer = [];
  while(progresses.length) {
      let len = progresses.length;
      for(let i=0; i<len; i++) {
          progresses[i] += speeds[i];
      }
      while(progresses[0] >= 100) {
          progresses.shift();
          speeds.shift();
      }
      if(len - progresses.length > 0) {
          answer[answer.length] = len - progresses.length;
      }
  }
  return answer;
}