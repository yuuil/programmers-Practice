function solution(arr) {
    let min = arr[0];
    for(let i=1; i<arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
    let idx = arr.findIndex(v=>v===min);
    arr.splice(idx,1);
    return !arr.length ? [-1] : arr;
}