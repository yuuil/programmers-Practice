function solution(seoul) {
    var answer = "김서방은 " + seoul.findIndex(v=> {
        return v === "Kim";
    }) + "에 있다"
    return answer;
}