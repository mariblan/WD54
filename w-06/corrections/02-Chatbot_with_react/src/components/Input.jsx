
function Input({handleSubmit, message, setMessage}) {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center align-center">
        <label htmlFor="message">Chatbox</label>
        <textarea className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} type="text" id='message' name='message' value={message}></textarea>
        <button type="submit">send</button>
    </form>
  )
}

export default Input;