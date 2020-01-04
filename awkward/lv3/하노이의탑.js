function hanoi(n, from, by, to, answer) {
    if(n == 1) {
        answer.push([from, to]);
    } else {
        hanoi(n-1, from, to, by, answer);
        answer.push([from, to]);
        hanoi(n-1, by, from, to, answer);
    }
    return answer;
}

function solution(n) {
    var answer = [];
    answer = hanoi(n, 1, 2, 3, answer);
    return answer;
}