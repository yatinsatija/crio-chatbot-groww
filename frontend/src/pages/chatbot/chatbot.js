import Chatbot from "react-simple-chatbot";
import "./chatbot.css";

const data = require("./questions.json");

let currentURLName;
let loggedIn = true;
let kycDone = false;

function ChatbotInterface(props) {
  currentURLName = props.URLName;

  const steps = [
    {
      id: "1",
      message: "Hello, What are you looking for ?",
      trigger: "2",
    },
    {
      id: "2",
      options: [],
    },
  ];

  // Fetching all the questions and answers from a JSON file and adding to the steps
  let count = 3;
  for (let i = 0; i < data.length; i++) {
    if (data[i].page === currentURLName) {
      steps[1].options.push({
        value: count,
        label: data[i].question,
        trigger: String(count),
      });

      steps.push({
        id: String(count),
        message: data[i].answer,
        trigger: "2",
      });
      count += 1;
    }
  }

  return (
    <div className="bot">
      <Chatbot steps={steps} headerTitle="Groww Bot" floating={true} />
    </div>
  );
}

export default ChatbotInterface;
