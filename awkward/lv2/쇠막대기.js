function solution(arrangement) {
    var answer = 0;
    let s = [];
    for(let i=0; i<arrangement.length; i++) {
        if(arrangement[i] === '(') s.push('(');
        else {
            s.pop();
            if(arrangement[i-1] === arrangement[i]) {
                answer++;
            } else {
                answer += s.length;
            }
        }
    }
    return answer;
}