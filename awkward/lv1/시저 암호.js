function solution(s, n) {
    const alpha = /[A-Z]/gi;
    var answer = '';
    s.split('').forEach(v=> {
        let code = v.charCodeAt(0);
        if(code >= 97) code = (code - 97 + n) % 26 + 97;
        else if(code >= 65) code = (code - 65 + n) % 26 + 65;
        code = String.fromCharCode(code);
        answer += code;
    })
    return answer;
}