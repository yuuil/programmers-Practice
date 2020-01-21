function solution(n) {
    var answer = '';
    const num = ['4', '1', '2'];
    while(n) {
        let r = n%3;
        n = parseInt(n/3);
        n += r === 0 ? -1 : 0;
        answer = num[r] + answer;
    }
    return answer;
}