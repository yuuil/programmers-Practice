function find(people, w) {
    let l = 0, r = people.length-1;
    while(l <= r) {
        let mid = parseInt((l+r)/2);
        if(people[mid] > w) r = mid - 1;
        else if(people[mid] < w) l = mid + 1;
        else return mid;
    }
    return r;
}
function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>{return a-b;});
    while(people.length) {
        answer++;
        let front = people.shift();
        if(people.length === 0) break;;
        if(front === limit) continue;
        let idx = find(people, limit - front);
        if(idx >= 0) people.splice(idx, 1);
    }
    return answer;
}