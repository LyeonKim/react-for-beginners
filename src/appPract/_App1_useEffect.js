// import './App.css';
import { useState, useEffect } from "react";
// import styles from "./App.module.css";

function App() {
	const [ counter, setValue ] = useState(0);
	const [ keyword, setKeyword ] = useState('');

	const onClick = () => setValue((prev) => prev + 1);
	// function onClick() { setValue(counter +1); }
	// console.log('i run all the time'); // state가 변경 될 때 마다 계속 실행

	const onChange = (e) => setKeyword(e.target.value);

	// [] 빈 배열을 넣어주면 -> mount,unmount시 단 한번만 실행 (초기 구동시 한번 실행)
	useEffect(() => {
		console.log('I run only once.');
	}, []); 
	// [] 배열 안의 변수중 하나라도 값이 변경되면 이펙트 함수 실행 -> keyword가 변해야만 실행됨
	useEffect(()=> {
		console.log('I run when "counter" change. :', counter);
	}, [counter]); 
	useEffect(()=> {
		console.log('I run when "keyword" change. :', keyword);
		// if ( keyword !== '' && keyword.length >= 3) { console.log('search for', keyword) } 
	}, [keyword]); 
	
	return (
		<div className="App">
			<h1 className={styles.title}>{counter}</h1> 
			<button
				onClick={onClick}
				>Click me</button><br />
			<input
				value={keyword}
				onChange={onChange}
				type="text" placeholder="Search" 
			/>
		</div>
	);
}

export default App;
