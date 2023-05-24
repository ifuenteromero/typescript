import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
	return (
		<div>
			<Alert>
				Hello <span> Word </span>
			</Alert>
			<Button onClick={() => console.log("click")}>My Button</Button>
		</div>
	);
};

export default App;
