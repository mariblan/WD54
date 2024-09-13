const myHeaders = new Headers();
myHeaders.append("provider", "open-ai");
myHeaders.append("mode", "production");
myHeaders.append("Authorization", "student-key");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "model": "gpt-4o",
  "stream": true,
  "messages": [
    {
      "role": "system",
      "content": "You are quite dramatic"
    },
    {
      "role": "user",
      "content": "Why is a raven like a writing desk?"
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://gen-ai-wbs-consumer-api.onrender.com/api/v1/chat/completions", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));