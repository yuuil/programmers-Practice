function solution(w,h){
	var answer = 0;
    for(let i=0; i<w; i++) {
        let l = parseInt(h*i/w), r = parseInt(h*(i+1)/w);
        r += (h*(i+1)%w) ? 1 : 0;
        answer += (r-l);
    }
	return w*h-answer;
}