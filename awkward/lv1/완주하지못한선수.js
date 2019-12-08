function solution(participant, completion) {
  const comp = {};
  const iter = {};
  for(let i=0; i<completion.length; i++) {
      if(comp[completion[i]] === undefined) comp[completion[i]] = 1;
      else comp[completion[i]]++;
  }
  for(let i=0; i<participant.length; i++) {
      if(iter[participant[i]] === undefined) iter[participant[i]] = 1;
      else iter[participant[i]]++;
  }
  for(let i=0; i<participant.length; i++) {
      if(iter[participant[i]] !== comp[participant[i]]) return participant[i];
  }
}