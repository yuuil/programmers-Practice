function numFormat(num) {
    if(num < 10) {
        num = "0" + num;
    }
    return num;
}

function solution(n, t, m, timetable) {
    var answer = '';
    let bus = [];
    let boarding = {};
    let tt = 9, mm = 0;
    bus.push(numFormat(tt) + ":" + numFormat(mm));
    boarding[bus[bus.length-1]] = [];
    for(let i=0; i<n-1; i++){
        tt = tt+parseInt((mm+t)/60);
        mm = (mm+t) % 60;
        bus.push(numFormat(tt) + ":" + numFormat(mm));
        boarding[bus[bus.length-1]] = [];
    }
    timetable.sort();
    let idx = 0;
    bus.forEach(v=> {
        while(idx < timetable.length && boarding[v].length < m
              && timetable[idx] <= v) {
            boarding[v].push(timetable[idx++]);
        }
    })
    const last = bus[bus.length-1];
    if(boarding[last].length < m) {
        answer = last;
    } else {
        let back = boarding[last][m-1];
        let [bt, bm] = back.split(":");
        bt = Number(bt), bm = Number(bm);
        if(bm) {
            answer = numFormat(bt) + ":" + numFormat(bm-1);
        } else {
            answer = numFormat(bt-1) + ":" + numFormat(59);
        }
    }
    return answer;
}