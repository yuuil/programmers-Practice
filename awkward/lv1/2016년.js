function solution(a, b) {
  const date = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const start = 5;
  let accum = start-1;
  for(let i=0; i<a-1; i++) {
      accum += month[i];
  }
  accum += b;
  accum %= 7;
  return date[accum];
}