function solution(x, n) {
    var answer = [];
    let accum = x;
    answer.push(accum);
    while(answer.length < n) {
        accum+=x;
        answer.push(accum);
    }
    return answer;
}