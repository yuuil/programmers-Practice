function solution(x) {
    let num = x, accum = 0;
    while(x) {
        accum += x%10;
        x = parseInt(x/10);
    }
    return !(num%accum);
}