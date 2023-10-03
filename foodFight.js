function solution(food) {
    var answer = [];
    /*
       food 1번째 index부터 시작
       food의 index가 짝수일때 index를 2로 나눠서 넣기
       food의 index가 홀수일때 index에서 1을 빼고 2로 나눠서 넣기
    */
    let result = [];
    for(i=1; i<food.length; i++) {
        if(Number(food[i])%2 == 0) {
            for(j=0; j<Number(food[i]/2); j++) {
            result.push(food.indexOf(food[i]));
            }
        }
        if(Number(food[i])%2 == 1) {
            let oldNum = Number(food[i])-1;
            for(j=0; j<oldNum/2; j++) {
                result.push(food.indexOf(food[i]));
            }
        }
    }
    let resultReverse = [...result].reverse();
    result.push(0);
    let final = result.concat(resultReverse);
    answer = final.join('');
    return answer;
}