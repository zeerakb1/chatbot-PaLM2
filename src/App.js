import ChatBot from "./components/Chatbot";

function App() {
  // const [message, setMessage] = useState([]);
  // const [text, setText] = useState("");

  // console.log(message);

  // const getResponse = async () => {
  //   const response = await fetch(`http://localhost:8000/prompt/${text}`);
  //   const data = await response.json();

  //   console.log(data);

  //   setMessage([
  //     ...message,
  //     {
  //       author: data.messages[0].content,
  //       bot: data.candidates[0].content,
  //     },
  //   ]);
  // };

  // console.log(text);

  return (
    <ChatBot/>

  );
}

export default App;
