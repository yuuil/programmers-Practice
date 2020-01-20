function solution(phone_number) {
    var arr = phone_number.split("");
    for(var i =0; i<phone_number.length-4; i++){
        arr[i] = "*";
    }
    return arr.join("");
}
