function solution(numbers, target) {
    var answer = 0;
    function iteration(depth, accum) {
        if(depth === numbers.length) {
            if(accum === target) answer++;
            return;
        }
        iteration(depth+1, accum+numbers[depth]);
        iteration(depth+1, accum-numbers[depth]);
    }
    iteration(0, 0);
    return answer;
}