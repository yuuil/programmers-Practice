function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++) {
        let temp = array.slice(commands[i][0]-1, commands[i][1]);
        //자바스크립트의 정렬 기준은 문자열이므로 정수를 정렬하려면 다음과 같이 소트.
        temp = temp.sort((a,b)=> {
            return a-b;
        });
        answer.push(temp[commands[i][2]-1]);
    }
    return answer;
}