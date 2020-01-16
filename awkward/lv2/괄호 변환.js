function correct(p){
  let pos = [[], []]; //괄호의 위치 저장
  for(let i=0; i<p.length; i++){
      if(p[i] === '(') pos[0].push(i);
      else if(p[i] === ')') pos[1].push(i);
  }
  for(let i=0; i<p.length/2; i++){
      if(i == p.length/2-1 && pos[0][i] < pos[1][i]) return p;
      if(pos[0][i] < pos[1][i]) continue;
      else break;
  }
  return;
}

function solution(p) {
  var answer = '';
  let cnt = [0, 0];
  var u, v;
  
  if(p == '') return ''; //빈 문자열이면 빈 문자열 리턴
  if(correct(p) == p) return p;
  
  for(let i=0; i<p.length; i++){
      if(p[i] === '(') ++cnt[0];
      else if(p[i] === ')') ++cnt[1];
      if(cnt[0] == cnt[1]){
          u = p.substr(0, i+1);
          v = p.substr(i+1, p.length-i-1);
          break;
      }
  }
  
  if(correct(u) == u) answer += u + solution(v);
  else {
      answer += '(' + solution(v) + ')';
      u = u.slice(1, -1);
      let temp = ''
      for(let j=0; j<u.length; j++) {
          if(u[j] == "(") temp += ')';
          else temp += '(';
      }
      answer += temp;
  }
  return answer;
}