function solution(str1, str2) {
  var answer = 0;
  var cmp1 = [];
  var cmp2 = [];
  var alpha = /^[a-zA-Z]+$/; //알파벳 아닌 경우 거르기 위한 정규식
  const cnt = [];
  
  const union = [];
  const intersection = [];
  for(let i=0; i<str1.length-1; i++) {
      var tmp = str1.substr(i,2).toUpperCase();
      if(alpha.test(tmp)) {
          cmp1.push(tmp);
          if(!union.includes(tmp)) union.push(tmp);
      }
  }
  
  for(let j=0; j<str2.length-1; j++) {
      var tmp = str2.substr(j,2).toUpperCase();
      if(alpha.test(tmp)) {
          cmp2.push(tmp);
          if(!union.includes(tmp)) union.push(tmp);
      }
  }
  
  for(let i=0; i<union.length; i++) {
      let tmp1 = 0, tmp2 = 0;
      for(let j=0; j<cmp1.length; j++) {
          if(union[i] == cmp1[j]) tmp1++;
      }
      for(let j=0; j<cmp2.length; j++) {
          if(union[i] == cmp2[j]) tmp2++;
      }
      cnt.push([tmp1, tmp2]);
  }
  
  for(let i=0; i<cnt.length; i++) {
      let min = Math.min(cnt[i][0], cnt[i][1]);
      let max = Math.max(cnt[i][0], cnt[i][1]);
      if(max) max--;

      for(let j=0; j<min; j++) intersection.push(union[i]);
      for(let j=0; j<max; j++) union.push(union[i]);
  }

  answer = intersection.length / union.length;
  
  if(!cmp1.length && !cmp2.length) answer = 1;
  
  return parseInt(answer*65536);
}