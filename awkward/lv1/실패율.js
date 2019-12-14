function solution(N, stages) {
  var answer = [];
  var pass = [stages.length];
  var failure = [];
  stages.forEach(v=> {
      for(let i=1; i<v; i++) {
          if(pass[i] == undefined) pass[i] = 1;
          else pass[i]++;
      }
  })
  if(pass[N] == undefined) pass[N] = 0;
  for(let i=1; i<=N; i++) {
      let denom = pass[i];
      let numer = pass[i-1];
      failure.push(1 - denom / numer);
  }
  for(let j=0; j<N; j++) {
      let maxVal = Math.max.apply(null, failure);
      let idx;
      for(let i=0; i<failure.length; i++) {
          if(failure[i] == maxVal) {
              idx = i;
              break;
          }
      }
      if(idx >= 0) {
          failure[idx] = -1;
          answer.push(idx+1);
      }
  }
  return answer;
}