function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5],
        second = [2, 1, 2, 3, 2, 4, 2, 5],
        third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  let correct = [0, 0, 0]
  for(let i=0; i<answers.length; i++) {
      if(first[i % first.length] === answers[i]) correct[0]++;
      if(second[i % second.length] === answers[i]) correct[1]++;
      if(third[i % third.length] === answers[i]) correct[2]++;
  }
  const max = correct.reduce(function(prev, curr) {
      return prev < curr ? curr : prev
  })
  for(let i=0; i<correct.length; i++) {
      if(correct[i] === max) {
          answer.push(i+1);
      }
  }
  return answer;
}