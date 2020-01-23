function solution(skill, skill_trees) {
    var answer = 0;
    skill = skill.split("");
    skill_trees.forEach(v=> {
        let flag = true, step = -1;
        v.split("");
        for(let i=0; i<v.length; i++) {
            let idx = skill.findIndex(x=>{ return x  === v[i]});
            if(idx < 0) continue;
            if(idx - step !== 1) {
                flag = false;
                break;
            } else step = idx;
        }
        if(flag) answer++;
    })
    return answer;
}