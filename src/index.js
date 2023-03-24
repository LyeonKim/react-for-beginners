import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./scss/App.scss"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App />
	
	// <React.StrictMode></React.StrictMode>
	/*
		React.StrictModes는 개발중에 앱의 버그를 발견하고 디버깅 하는 동안 사용하도록 고안된 것
		-> 프로덕션 환경에서는 사용하지 않을 것을 권장하고 있으며. 주의점과, 문제점 또한 존재한다.
		
		* 주의할점
		- render 함수가 두번 호출될 수 있다.
		- 일부 라이브러리에서 예상치 못한 동작이 발생할 수 있다
		- 컴포넌트의 생명주기 메소드가 두번 호출될 수 있다
	*/ 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
