function solution(n, arr1, arr2) {
    var answer = [];
    var decode1 = [], decode2 = [];
    for(let i=0; i<n; i++) {
        let str = "";
        while(arr1[i] >= 1) {
            if(arr1[i] % 2 == 0) {
                str = "." + str;
                arr1[i] /= 2;
            } else {
                str = "#" + str;
                arr1[i] = (arr1[i] - 1) / 2;
            }
        }
        while(str.length < n) {
            str = "." + str;
        }
        decode1.push(str);
    }
    for(let i=0; i<n; i++) {
        let str = "";
        while(arr2[i] >= 1) {
            if(arr2[i] % 2 == 0) {
                str = "." + str;
                arr2[i] /= 2;
            } else {
                str = "#" + str;
                arr2[i] = (arr2[i] - 1) / 2;
            }
        }
        while(str.length < n) {
            str = "." + str;
        }
        decode2.push(str);
    }
    for(let i=0; i<n; i++) {
        let str = "";
        for(let j=0; j<n; j++) {
            if(decode1[i][j] == '#' || decode2[i][j] == '#') {
                str += "#";
            } else {
                str += " ";
            }
        }
        answer.push(str);
    }
    return answer;
}