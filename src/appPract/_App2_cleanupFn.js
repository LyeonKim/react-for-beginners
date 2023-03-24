import { useState, useEffect } from "react";

function Hello() {
	useEffect(function () {
		console.log("hi :)");
		return () => { // = cleanup function 
				// => 그냥 fn함수인데, 나의 component가 destroy 될 때 뭔가 하도록 하는 것을 cleanup function이라고 부름
			console.log("bye :(");
		};
	}, []);
	return <h1>Hello</h1>;
}

function App() {
const [showing, setShowing] = useState(false);
const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
			{showing ? <Hello /> : null}
		</div>
	);
}

export default App;