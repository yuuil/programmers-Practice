function solution(lines) {
  var answer = 0;
  let times = [];
  let len = lines.length;
  lines.forEach(v=>{
      let [d, s, t] = v.split(" ");
      t = t.slice(0,-1);
      let [yy, MM, dd] = d.split('-');
      let [hh, mm, ss, ms] = s.split(/[:.]/g);
      let date = new Date(Date.UTC(yy,MM,dd,hh,mm,ss,ms))
      let start = new Date(date-t*1000+1);
      times.push([start,date]);
  })
  for(let i=0; i<len; i++) {
      let accum = 0;
      for(let j=i; j<len; j++) {
          if(times[j][0] - times[i][1] < 1000) accum++;
      }
      answer = Math.max(accum, answer);
  }
  return answer;
}
