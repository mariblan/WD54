const myHeaders = new Headers();
myHeaders.append("provider", "open-ai");
myHeaders.append("mode", "production");
myHeaders.append("Authorization", "student-key");
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  model: "dall-e-3",
  prompt: "Hands of a developer over a keyboard",
  size: "1024x1024",
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://gen-ai-wbs-consumer-api.onrender.com/api/v1/images/generations",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
