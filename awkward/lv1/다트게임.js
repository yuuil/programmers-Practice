function solution(dartResult) {
  const numExp = /[0-9]/;
  const alpha = /[A-Z]/;
  let score = [];
  let accum = 0;
  for(let i=0; i<dartResult.length; i++) {
      if(numExp.test(dartResult[i])) {
          accum = accum * 10 + Number(dartResult[i]);
      } else if(alpha.test(dartResult[i])) {
          score.push(bonus(dartResult[i], accum));
          accum = 0;
      } else {
          let last = score.length - 1;
          if(dartResult[i] === '*') {
              score[last] *= 2;
              if(last > 0) score[last-1] *= 2;
          } else if(dartResult[i] === '#') {
              score[last] *= -1;
          }
      }
  }
  var answer = 0;
  for(let i=0; i<score.length; i++) {
      answer += score[i];
  }
  return answer;
}

function bonus(flag, num) {
  switch(flag) {
      case 'S':
          return num;
      case 'D':
          return double(num);
      case 'T':
          return triple(num);
  }
}

function double(num) {
  return num*num;
}

function triple(num) {
  return double(num) * num;
}