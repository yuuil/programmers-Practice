function solution(heights) {
    var answer = [];
    for(let i=0; i<heights.length; i++) {
        let arr = heights.slice(0, i);
        while(arr.length) {
            if(arr.pop() > heights[i]) {
                answer[i] = arr.length + 1;
                break;
            }
        }
        if(!answer[i]) answer[i] = 0;
    }
    return answer;
}