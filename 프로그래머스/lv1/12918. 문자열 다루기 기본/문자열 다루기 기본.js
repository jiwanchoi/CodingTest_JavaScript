function solution(s) {
    if(s.length == 4 || s.length == 6){
        return s.split("").every(a => !isNaN(a)) // 모든 요소가 number이면 true리턴
    } else {
        return false;
    }
}
