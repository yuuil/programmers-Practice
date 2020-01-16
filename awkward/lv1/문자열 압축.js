function solution(s) {
  var answer = 0;
  let min_length = s.length;
  let temp_ans;
  
  for(let i=1; i<= min_length; i++) {
      let temp_ans = "";
      let comp = s.substr(0, i);
      let cnt = 1;
      for(let j=1; j<= parseInt(s.length / i); j++){
          if(s.substr(j*i, i) == comp) cnt++;
          else if(cnt > 1) {
              temp_ans += cnt.toString() + comp;
              comp = s.substr(j*i,i);
              cnt = 1;
          }
          else {
              temp_ans += comp;
              comp = s.substr(j*i,i);
              cnt = 1;
          }
      }
      if(s.length % i) temp_ans += s.substr(parseInt(s.length/i)*i, i);
      if(temp_ans.length < min_length) min_length = temp_ans.length;
  }
  answer = min_length;
  return answer;
}