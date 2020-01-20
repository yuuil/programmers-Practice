function solution(s) {
    var idx = 0;
    return s.split('').map(v=> {
        if(v === ' ') {
            idx = 0;
            return v;
        }
        return (idx++)%2 ? v.toLowerCase() : v.toUpperCase();
    }).join('');
}