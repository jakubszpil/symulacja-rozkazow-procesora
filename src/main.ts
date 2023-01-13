import "./style.css";
import { ActionTypeEnum } from "./types";
import { genRandomHexValue } from "./lib";

const resetButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[data-reset]");
const randomButtons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll("[data-random]");

const form = document.getElementById("form") as HTMLFormElement;
const history = document.getElementById("history")!;

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const action = event.submitter?.dataset.action!.toUpperCase() as
    | "MOV"
    | "XCHG";
  const actionType = ActionTypeEnum[action];

  const source = String(form.source.value);
  const destination = String(form.destination.value);

  const sourceItem = document.getElementById(source) as HTMLInputElement;
  const destinationItem = document.getElementById(
    destination
  ) as HTMLInputElement;

  if (actionType === ActionTypeEnum.MOV) {
    const sourceItemValue = sourceItem.value;
    sourceItem.value = "";
    destinationItem.value = sourceItemValue;

    history.innerHTML += `
      <div class="flex gap-3 items-center h-max">
        <span class="font-bold">${action}:</span>
        <span>${source} => ${destination}</span>
      </div>
    `;
    return;
  }

  if (actionType === ActionTypeEnum.XCHG) {
    const sourceItemValue = sourceItem.value;
    const destinationItemValue = destinationItem.value;

    sourceItem.value = destinationItemValue;
    destinationItem.value = sourceItemValue;

    history.innerHTML += `
      <div class="flex gap-3 items-center h-max">
        <span class="font-bold">${action}:</span>
        <span>${source} <=> ${destination}</span>
      </div>
    `;
    return;
  }
});

form.addEventListener("reset", () => {
  history.innerHTML = "";
});

resetButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;
    const registerType = target.dataset.reset as string;
    const registerInput = document.getElementById(
      registerType
    ) as HTMLInputElement;
    registerInput.value = "";
  });
});

randomButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const target = event.target as HTMLButtonElement;
    const registerType = target.dataset.random as string;
    const registerInput = document.getElementById(
      registerType
    ) as HTMLInputElement;
    registerInput.value = genRandomHexValue(4).toUpperCase();
  });
});
