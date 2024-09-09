import Message from "./Message";

function Chat({messages}) {
    console.log(messages);

  return (
    <div className="flex flex-col justify-around align-center p-2">
        {messages.map((message) => <Message key={message?.id} message={message} />)}  
    </div>
  )
}

export default Chat