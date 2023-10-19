async function getPrompt() {
  let response = await fetch("promptlines.json");
  let promptData = await response.json();
  let randomNumber = Math.floor(Math.random() * 7);
  let newPrompt = promptData.promptOptions[randomNumber].prompt;
  document.querySelector("#prompt").textContent = newPrompt;
}

getPrompt();

function displayTimerOn() {
  let confirmation = document.querySelector("#time-display");
  confirmation.style.display = "block";
}

function timesUpAlert() {
  alert("Your one minute is up!");
}

function timesUp() {
  setTimeout(timesUpAlert, 60000);
}

function copyContent() {
  let copyContent = document.querySelector("#text-field");
  copyContent.select();
  navigator.clipboard.writeText(copyContent.value);
}
