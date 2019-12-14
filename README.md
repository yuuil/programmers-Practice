# 프로그래머스 코딩테스트 연습문제
_With JavaScript_



## 문제 풀이 목록

| - TO DO - | - DOING -                                                    | _- ~~DONE~~ -_                                               |
| :-------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
|           | **[Level 1]**<br />[카카오 2019 블라인드]<br />실패율 (70.4 / 100)<br /> | **[Level 1]**<br />[카카오 2020 블라인드]<br />문자열 압축<br />[카카오 2018 블라인드 1차]<br />다트게임<br />[해시]<br />완주하지 못한 선수<br />[완전탐색]<br />모의고사<br />[연습문제]<br />2016년<br />가운데 글자 가져오기<br />같은 숫자는 싫어<br />[정렬]<br />K번째수 *<br />[그리디]<br />체육복<br /><br />**[Level 2]**<br />[카카오 2020 블라인드]<br />괄호 변환<br />[카카오 2019 블라인드]<br />오픈채팅방 (기존의 시간초과 코드는 주석처리)<br />[카카오 2018 블라인드 1차]<br />뉴스 클러스터링<br />[스택/큐]<br />프린터 (c++)<br />기능개발<br /> |



### K번째수 *

**JS의 `정렬기준은 문자열`로, arr.sort() 시 arr = [100, 2] 일 때, "100" < "2"로 인식해 정렬한다.**

**따라서 정수형으로 정렬을 위해서는 다음과 같이 코드를 작성해야 한다.**

```javascript
arr.sort((a,b)=> {
  return a - b
})
```

