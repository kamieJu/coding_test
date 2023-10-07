function solution(k, m, score) {
    var answer = 0;
    /*
    k는 최대 점수, m은 한 상자의 사과 개수 이다
    1. score의 length값이 m보다 작을 시 0을 리턴한다.
    2. score을 오름차순을 정리한다.
    3. score값에서 작은 수를 삭제하고 m만큼만 index에 남긴다.
    4. 남은 index를 뒤에서 부터 m만큼 뽑아낸다.
    5. 뽑아낸 index에서 가장 작은 수를 뽑아낸다.
    6. 뽑아낸 가장 작은 수를 m으로 곱하여 result값으로 계속해서 더해준다.
    */
    if(score.length < m) {
        return 0;
        // score의 length값이 m보다 작을 시 0을 리턴
    }
    score.sort(function(a, b) {return a - b;}
        // score값을 오름차순으로 정리
              );
    while(score.length >= m) {
        score.splice(0,1);
        // score값에서 작은 수를 삭제하고 m값 만큼만 남김.
    }
    console.log(score);
}