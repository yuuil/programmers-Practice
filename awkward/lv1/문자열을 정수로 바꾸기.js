function solution(s) {
    const reg = /^[+-]/;
    var answer = 0;
    if(reg.test(s[0])) answer = Number(s.substr(1)) *(s[0] === '-' ? -1 : 1);
    else answer = Number(s);
    return answer;
}