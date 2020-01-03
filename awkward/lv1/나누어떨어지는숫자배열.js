function comp(a, b) {
    return a-b;
}
function solution(arr, divisor) {
    var answer = [];
    arr.forEach(v=>{
        if(v % divisor === 0) {
            answer.push(v);
        }
    })
    if(answer.length) {
        answer.sort(comp);
    } else {
        answer = [-1];
    }
    
    
    return answer;
}