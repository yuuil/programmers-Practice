function solution(strings, n) {
    var answer = [];
    answer = strings.sort((a, b)=> {
        return a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
    });
    return answer;
}