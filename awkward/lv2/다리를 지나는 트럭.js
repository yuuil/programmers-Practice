function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let curr = 0, on = [];
    while(on.length || truck_weights.length) {
        if(on.length) {
            let front = on[0];
            if(answer - front[0] === bridge_length) {
                curr -= front[1];
                on.shift();
            }
        }
        let top = truck_weights[0];
        if(curr + top <= weight) {
            curr += truck_weights.shift();
            on.push([answer, top]);
        }
        answer++;
    }
    return answer;
}