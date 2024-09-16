function displayAffirmation(response) {
  new Typewriter("p", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructions = document.querySelector("#instructions");
  let apiKey = "oc8ctbd8ae9cf7802f361094f4eae69b";
  let prompt = `Create a four line daily affirmation specifically about ${instructions.value}.Keep it motivational, positive and short`;
  let context =
    "You are creating four-line affirmations based on the user's chosen topic.The affirmations should be brief, positive and uplifiting. Focus on empowering and motivation the user with a clear connection to the chosen topic.Keep each affirmation concise but impactful.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAffirmation);
}
let affirmationForm = document.querySelector("#affirmation-form");
affirmationForm.addEventListener("submit", generateAffirmation);
