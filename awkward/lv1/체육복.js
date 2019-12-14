function solution(n, lost, reserve) {
  var answer = 0;
  var student = new Array();
  student.push(0);
  for(let i=0; i<n; i++) {
      student.push(1);
  }
  lost.forEach(v=> {
      student[v]--;
  })
  reserve.forEach(v=> {
      student[v]++;
  })
  for(let i=1; i<=n; i++) {
      if(student[i] == 0) {
          if(i - 1 > 0 && student[i-1] > 1) {
              student[i-1]--;
              student[i]++;
              continue;
          }
          if(i + 1 <= n && student[i+1] > 1) {
              student[i+1]--;
              student[i]++;
          }
      }
  }
  student.forEach(v=> {
      if(v) answer++;
  })
  return answer;
}