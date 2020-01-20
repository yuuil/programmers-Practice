function solution(num) {
    var answer = 0;
    while(answer++ < 500 && num > 1) {
        num = num%2 ? num*3+1 : num/2;
    }
    if(--answer === 500 && num > 1) return -1;
    return answer;
}