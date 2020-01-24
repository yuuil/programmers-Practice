function comp(a,b) {
    a = a+'', b = b+'';
    return (b+a) - (a+b);
}
function solution(numbers) {
    let answer = numbers.sort(comp).join("");
    return answer[0] === "0" ? "0" : answer;
}