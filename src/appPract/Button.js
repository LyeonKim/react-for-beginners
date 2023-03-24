import PropTypes from "prop-types";
import styles from "./module_css/Button.module.css";

function Button ({text, backgroundColor}){
	return(
		<div>
				<button 
					className={styles.btn}
				>
					{text}
				</button>
		</div>
	);
}

Button.propTypes = {
	// text: propType.number.isRequired 
	text: PropTypes.string.isRequired,
}

export default Button;