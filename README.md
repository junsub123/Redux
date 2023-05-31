<h1><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> 공부</h1>

자료 : <a href="https://www.youtube.com/watch?v=tdORpiegLg0">별코딩 유튜브</a>

<br />

<h2>리덕스에서 사용되는 키워드</h2>
<p>
1. 액션(Action)<br />
상태에 변화가 필요할 때 발생시킴 (캑체하나로 표현)<br />
type을 필수로 그외의 값들은 개발자 마음대로 생성
</p>
<p>
2. 액션 생성함수(Action Creator)<br />
컴포넌트에서 더욱 쉽게 액션을 발생ㅅ키기 위함<br/>
필수 아님❌
</p>
<p>
3. 리듀서 (Reducer)<br />
변화를 일으키는 함수<br />
현재의 상태와 액션을 참조하여 새로운 상태를 반환
</p>
<p>
4. 스토어 (Store)<br />
한 애플리케이션당 하나의 스토어<br />
스토어안에 현재의 앱 상태와 리듀서, 내장함수 포함
</p>
<p>
5. 디스패치 (Dipatch)<br />
스토어의 내장함수<br />
액션을 발생 시키는 것
</p>
<p>
6. 구독 (subscribe)<br />
스토어의 내장함수<br />
subscribe 함수에 특정 함수를 전달해주면, 액션이 디스패치 되었을 때 마다 전달해준 함수가 호출<br />
(리액트에서는 connect함수 또는 useSelector Hook을 사용)
</p>

<h2>리덕스의 3가지 규칙</h2>

<p>1. 하나의 애플리케이션에 하나의 스토어</p>
<p>2. 상태는 읽기전용 / 리액트의 불변성</p>
<p>
3. 변화를 일으키는 함수, 리듀서는 수수한 함수<br />
동일한 인풋 => 동일한 아웃풋<br />
new Date(), 랜덤숫자 생성, 네트워크에 요청 등은 순수하지 않은 작업(?) => 리듀서 밖에서 처리
</p>

<h2>리덕스 모듈이란?</h2>
<ul>
    <li>액션 타입</li>
    <li>액션 생성함수</li>
    <li>리듀서</li>
</ul>
<p>위 항목들이 모두 들어있는 자바스크립트 파일을 의미한다</p>
