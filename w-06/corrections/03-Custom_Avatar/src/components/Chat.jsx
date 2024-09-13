import Message from "./Message";

function Chat({messages}) {
    console.log(messages);

  return (
    <div className="w-11/12 flex flex-col justify-center items-center p-2">
        {messages.map((message) => <Message key={message?.id} message={message} />)}  
    </div>
  )
}

export default Chat