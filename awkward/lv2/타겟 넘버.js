var cnt = 0, goal;
function iteration(depth, numbers, accum) {
    if(depth === numbers.length) {
        if(accum === goal) cnt++;
        return;
    }
    iteration(depth+1, numbers, accum+numbers[depth]);
    iteration(depth+1, numbers, accum-numbers[depth]);
}
function solution(numbers, target) {
    goal = target;
    iteration(0, numbers, 0);
    return cnt;
}