function rotate(key) {
  const M = key.length;
  let rkey = Array.from(Array(M), ()=>Array(M).fill(0));
  for(let i=0; i<M; i++) {
      for(let j=0; j<M; j++) {
          rkey[j][M-1-i] = key[i][j];
      }
  }
  return rkey;
}
function openable(N, overlap, key, sx, sy) {
  const M = key.length;
  let temp = Array.from(overlap, x=>x.slice(0));
  for(let i=0; i<M; i++) {
      for(let j=0; j<M; j++) {
          temp[sx+i][sy+j] ^= key[i][j];
      }
  }
  for(let i=0; i<N; i++) {
      for(let j=0; j<N; j++) {
          if(!temp[M-1+i][M-1+j]) return false;
      }
  }
  return true;
}
function solution(key, lock) {
  const M = key.length;
  const N = lock.length;
  const s = M * 2 + N - 2;
  let overlap = Array.from(Array(s), ()=>Array(s).fill(0));
  for(let i=0; i<N; i++) {
      for(let j=0; j<N; j++) {
          overlap[M-1+i][M-1+j] = lock[i][j];
      }
  }
  for(let i=0; i<M+N-1; i++) {
      for(let j=0; j<M+N-1; j++) {
          let rkey = key;
          for(let d=0; d<4; d++) {
              if(openable(N, overlap, rkey, i, j)) return true;
              rkey = rotate(rkey);
          }
      }
  }
  return false;
}