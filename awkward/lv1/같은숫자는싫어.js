function solution(arr)
{
    var answer = [];
    for(let i=1; i<arr.length; i++) {
        if(arr[i-1] !== arr[i]) answer.push(arr[i-1]);
        if(i == arr.length - 1) answer.push(arr[i]);
    }
    return answer;
}