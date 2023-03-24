import { useEffect, useState } from "react";
// import styles from "./App.module.css";

function App() {
	const [loading, setLoading] = useState(true);
	const [ coins, setCoins] = useState([]);

	useEffect(()=> {
		fetch("https://api.coinpaprika.com/v1/tickers")
			.then((response) => response.json())
			.then((json) => { 
				//.then() 체이닝 메서드 : 작업 처리 과정을 연속으로 호출하여 코드를 간결하게한다.
				setCoins(json);
				setLoading(false);
			});
	}, []);//초기구동

	return (
		<div>
				<h1>
					The Coins! &nbsp; { loading ? null : `( total ${coins.length} )` }
				</h1>
				{ loading 
					? <strong>Loading...</strong> 
					: <select> 
						{ coins.map((coin, id) => (
							<option key={id} value={id}>
									{coin.name}&nbsp;
										( {coin.symbol} : ${coin.quotes.USD.price} )
									
							</option>
						))}
					</select>
				}
		</div>
		)
}

export default App; 