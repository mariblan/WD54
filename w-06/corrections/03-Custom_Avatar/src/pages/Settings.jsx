import { useState } from "react";
import Prompt from "../components/Prompt";
import Image from "../components/Image";

function Settings() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(
    JSON.parse(localStorage.getItem("image")) || null
  );

  const handleChange = (e) => {
    setPrompt(e.target.value);
  };

  console.log(prompt);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (prompt.trim() === "") return;
      const response = await fetch(
        "http://localhost:5050/api/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            provider: "open-ai",
            mode: "development",
          },
          body: JSON.stringify({
            model: "dall-e-3",
            prompt: prompt,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      setImage(data[0]);
      localStorage.setItem("image", JSON.stringify(data[0]));
      setPrompt("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <Image image={image} prompt={prompt} />
      <Prompt
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        prompt={prompt}
      />
    </>
  );
}

export default Settings;
