function gcd(a,b) {
    return b ? gcd(b,a%b) : a;
}

function lcm(a,b) {
    return a*b/gcd(a,b);
}

function solution(n, m) {
    return [gcd(n,m), lcm(n,m)];
}