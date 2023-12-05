import React, { useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
// import { LibManifestPlugin } from "webpack";

//create your first component
const Home = () => {
	const [list, setList] = useState([]);
	const [input, setInput] = useState("");

	const addTodo = (todo) => {
		const newTodo = {
			id: Math.random(),
			todo: todo,
		};
		//add the todo to the list
		setList([...list, newTodo]);

		//clear input box
		setInput("");
	};

	const deleteTodo = (id) => {
		//filter outtodo with the id
		const newList = list.filter((todo) => todo.id !== id);

		setList(newList);
	};

	return (
		<div className="container">
			<h1 className="text-center mt-5">Todo's List</h1>

			<input type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button onClick={() => addTodo(input)}>Add</button>
			<ul>
				{list.map((todo) => (
					<li key={todo.id}>
						{todo.todo} {/* Display the text of the todo */}
						<button onClick={() => deleteTodo(todo.id)}>&times;</button>
					</li>
				))}
			</ul>


		</div>
	);
}

export default Home;
