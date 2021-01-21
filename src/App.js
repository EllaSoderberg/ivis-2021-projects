import "./App.css";
import Example from "./components/example";

function App() {
  return (
    <div className="container p-16 flex">
      <div>
        <Example />
      </div>
      <div className="font-mono">
        <h1 className="text-lg font-bold">Example D3.js plot and example styling!</h1>
        <p>
          Plot is taken from{" "}
          <a
            className="font-semibold text-blue-600 hover:text-red-500"
            href="https://blog.logrocket.com/using-d3-js-v6-with-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
        Link to{" "}
        <a
          className="font-semibold text-blue-600 hover:text-red-500"
          href="https://https://tailwindcss.com/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind documentation
        </a>
      </div>
    </div>
  );
}

export default App;
