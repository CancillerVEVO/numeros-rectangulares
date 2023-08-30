interface ElementMap {
  "parameter-a": HTMLInputElement;
  "parameter-c": HTMLInputElement;
  "parameter-m": HTMLInputElement;
  "parameter-x0": HTMLInputElement;
}

const elements: ElementMap = {
  "parameter-a": document.getElementById("parameter-a") as HTMLInputElement,
  "parameter-c": document.getElementById("parameter-c") as HTMLInputElement,
  "parameter-m": document.getElementById("parameter-m") as HTMLInputElement,
  "parameter-x0": document.getElementById("parameter-x0") as HTMLInputElement,
};

export default function updateEquation() {
  const a = parseFloat(elements["parameter-a"].value);
  const c = parseFloat(elements["parameter-c"].value);
  const m = parseFloat(elements["parameter-m"].value);
  const x0 = parseFloat(elements["parameter-x0"].value);

  const equationA = document.getElementById("equation-a")!;
  const equationC = document.getElementById("equation-c")!;
  const equationM = document.getElementById("equation-m")!;
  const equationX0 = document.getElementById("equation-x0")!;

  equationA.textContent = a.toString();
  equationC.textContent = c.toString();
  equationM.textContent = m.toString();
  equationX0.textContent = x0.toString();
}
