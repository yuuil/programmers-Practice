function solution(citations) {
    var answer = 0;
    citations.sort((a,b)=>{return a-b;});
    let len = citations.length,
        l = 0,
        r = len;
    while(l <= r) {
        let mid = parseInt((l+r)/2),
            accum = 0;
        for(let i=0; i<len; i++) {
            if(mid <= citations[i]) accum++;
        }
        if(accum >= mid) l = mid + 1;
        else r = mid - 1;
    }
    return r;
}