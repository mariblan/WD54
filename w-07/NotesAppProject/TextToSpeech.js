const myHeaders = new Headers();
myHeaders.append("provider", "open-ai");
myHeaders.append("mode", "production");
myHeaders.append("Authorization", "student-key");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "stream": true,
  "model": "tts-1",
  "voice": "echo",
  "input": "Ob-la-di ob-la-da life goes on, brah"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://gen-ai-wbs-consumer-api.onrender.com/api/v1/audio/speech", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));