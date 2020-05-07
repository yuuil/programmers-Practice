function solution(board, moves) {
  let answer = 0,
      stack = [];
  moves.forEach(v=> {
      let idx = board.findIndex(el=>el[v-1]>0);
      let len = stack.length;
      if(len) {
          if(stack[len-1] == board[idx][v-1]) {
              stack.pop();
              answer+=2;
          }
      }
      else stack.push(board[v-1][idx]);
      board[v-1][idx] = 0;
  })
  return answer;
}