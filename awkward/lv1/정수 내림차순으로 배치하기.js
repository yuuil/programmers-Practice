function comp(c1, c2) {
    return c2 - c1;
}
function solution(n) {
    return String(n).split('').sort(comp).join('')-'0';
}