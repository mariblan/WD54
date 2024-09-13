function Prompt({handleChange, handleSubmit, prompt}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-11/12 flex flex-col justify-center"
    >
      <label htmlFor="promt">Promt</label>
      <input type="text" id="promt" value={prompt} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  )
}

export default Prompt