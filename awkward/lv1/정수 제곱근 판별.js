function solution(n) {
    let rt = parseInt(Math.sqrt(n));
    return rt*rt === n ? (rt+1)*(rt+1) : -1;
}