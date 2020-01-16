function solution(s) {
    const reg = /[^0-9]/;
    var answer = !reg.test(s) && (s.length == 4 || s.length == 6);
    return answer;
}