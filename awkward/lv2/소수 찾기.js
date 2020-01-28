function solution(numbers) {
    var answer = 0;
    let map = {};
    let MAX = 1e7;
    const numstr = [];
    const pn = new Array(MAX).fill().map(v=>0);
    pn[0] = pn[1] = 1;
    for(let i=2; i<=Math.sqrt(MAX); i++) {
        if(!pn[i]) {
            for(let j=i+i; j<MAX; j+=i) {
                pn[j] = 1;
            }
        }
    }
    numbers = numbers.split("");
    function permutation(d, str, visited) {
        if(d === numbers.length) {
            numstr.push(str);
            return;
        }
        for(let i=0; i<numbers.length; i++) {
            if(!(visited & (1<<i))) {
                permutation(d+1, str+numbers[i], visited | (1<<i));
            }
        }
    }
    function select(idx, str, picked) {
        if(idx === str.length) {
            if(picked === "") return;
            const num = parseInt(picked);
            if(!map[num]) {
                map[num] = 1;
                if(!pn[num]) answer++;
            }
            return;
        }
        select(idx+1, str, picked);
        select(idx+1, str, picked+str[idx]);
    }
    permutation(0, "", 0);
    for(let curr of numstr) {
        select(0, curr, "");
    }
    return answer;
}