function comp(a, b) {
    return b-a;
}

function fail_comp(a, b) {
    return (a[1]*b[2] - a[2]*b[1] == 0) ? a[0]-b[0] :  a[1]*b[2] - a[2]*b[1];
}

function solution(N, stages) {
    var ret = [];
    var answer = [];
    var fail = [];
    for(let i=0; i<=N+1; i++) {
        answer[i] = 0;
    }
    stages.sort(comp);
    stages.forEach(v=> {
        answer[v-1]++;
    })
    for(let i=N; i>=1; i--) {
        answer[i-1] += answer[i];
    }
    for(let i=1; i<=N; i++) {
        fail.push([i, answer[i-1], answer[i-1] - answer[i]]);
    }
    fail.sort(fail_comp);
    fail.forEach(v=> {
        ret.push(v[0]);
    })
    return ret;
}