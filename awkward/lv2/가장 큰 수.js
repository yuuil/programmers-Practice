function comp(a,b) {
    a = a.toString(), b = b.toString();
    return (b+a) - (a+b);
}
function solution(numbers) {
    let cnt = 0;
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] === 0) cnt++;
    }
    if(cnt === numbers.length) return "0";
    return numbers.sort(comp).join("");
}