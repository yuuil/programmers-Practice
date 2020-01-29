function comp(a, b) {
    return a - b;
}

function gcd(a, b) {
    if(b == 0) {
        return a;
    }
    return gcd(b, a%b);
}

function solution(brown, red) {
    var answer = [];
    var sol = [];
    let w, h;
    let mul = brown + red, addition = (brown + 4) /2;
    for(let i=1; i<=parseInt(mul/2); i++) {
        if(mul % i == 0) {
            sol.push(i);
            if(i !== mul / i) {
                sol.push(mul / i);
            }
        }
    }
    sol.sort(comp);
    const len = sol.length;
    for(let i=0; i<=parseInt(len/2); i++) {
        if(sol[i] + sol[len - i - 1] === addition) {
            return [sol[len-1-i], sol[i]];
        }
    }
    return answer;
}