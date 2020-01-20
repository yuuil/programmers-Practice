function solution(arr1, arr2) {
    let r = arr1.length, c = arr1[0].length;
    let answer = [];
    for(let i=0; i<r; i++) answer[i] = new Array();
    for(let i=0; i<r; i++) {
        for(let j=0; j<c; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}