const limit = 1e6;
var pn = [];
function make_pn() {
    pn[0] = pn[1] = 0;
    for(let i=2; i<= limit; i++) {
        pn[i] = 1;
    }
    for(let i=2; i<=Math.sqrt(limit); i++) {
        if(pn[i]) {
            for(let j=i*i; j<=limit; j+=i) {
                pn[j] = 0;
            }
        }
    }
}
function solution(n) {
    var answer = 0;
    make_pn();
    for(let i=2; i<=n; i++) {
        if(pn[i]) {
            answer++;
        }
    }
    return answer;
}