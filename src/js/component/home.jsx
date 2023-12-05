import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue] = useState("")
	return (
		<div className="container">
			<h1 className="text-center mt-5">Todo's List</h1>
			<ul>
				<li>
					<input type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value = {inputValue}
					onKeyPress= {(e) => e.keyCode == 13 ? setTodos}
					placeholder="What do you want to do?" />
				</li>
				<li>ahh</li>
			</ul>

		</div>
	);
};

export default Home;
