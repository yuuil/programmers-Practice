function solution(s){
    const p = /[pP]/;
    const y = /[yY]/;
    var answer = true;
    let pcnt = 0, ycnt = 0;
    for(let i=0; i<s.length; i++) {
        pcnt += p.test(s[i]);
        ycnt += y.test(s[i]);
    }
    return pcnt === ycnt;
}