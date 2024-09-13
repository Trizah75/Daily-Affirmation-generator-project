function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("p", {
    strings: "You are loved and strong! Keep embracing.",
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}
let affirmationForm = document.querySelector("#affirmation-form");
affirmationForm.addEventListener("submit", generateAffirmation);
