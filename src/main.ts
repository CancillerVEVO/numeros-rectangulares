import updateEquation from "./updateEquation";

document.addEventListener("DOMContentLoaded", () => {
  const inputSpanPairs = [
    ["parameter-a", "equation-a"],
    ["parameter-c", "equation-c"],
    ["parameter-m", "equation-m"],
    ["parameter-x0", "equation-x0"],
  ];

  inputSpanPairs.forEach(([inputId, spanId]) => {
    const input = document.getElementById(inputId) as HTMLInputElement | null;
    const span = document.getElementById(spanId) as HTMLSpanElement | null;

    if (input && span) {
      input.addEventListener("input", () => {
        span.innerText = input.value;
      });
    }
  });

  const resultTable = document.getElementById(
    "table-body"
  ) as HTMLTableSectionElement;

  const generateButton = document.getElementById(
    "button-submit"
  ) as HTMLButtonElement;

  generateButton.addEventListener("click", (event) => {
    event.preventDefault();

    resultTable.innerHTML = "";

    const aInput = document.getElementById(
      "parameter-a"
    ) as HTMLInputElement | null;
    const cInput = document.getElementById(
      "parameter-c"
    ) as HTMLInputElement | null;
    const mInput = document.getElementById(
      "parameter-m"
    ) as HTMLInputElement | null;
    const x0Input = document.getElementById(
      "parameter-x0"
    ) as HTMLInputElement | null;

    if (aInput && cInput && mInput && x0Input) {
      const a = parseFloat(aInput.value);
      const c = parseFloat(cInput.value);
      const m = parseFloat(mInput.value);
      const x0 = parseFloat(x0Input.value);

      let xn = x0;

      let n = 1;
      let isRejected = false;
      const result = [];

      while (n < m && !isRejected) {
        const numRect = (a * xn + c) % m;
        const newRow = resultTable.insertRow();
        newRow.insertCell().textContent = n.toString();
        newRow.insertCell().textContent = xn.toString();
        newRow.insertCell().textContent = `(${a}(${xn}) + ${c}) mod ${m} = ${Math.floor(
          (a * xn + c) / m
        )} + ${numRect} / ${m}`;
        newRow.insertCell().textContent =
          numRect.toString() + " / " + m.toString();

        result.push((a * xn + c) % m);

        xn = (a * xn + c) % m;
        n++;

        if (result.includes((a * xn + c) % m)) {
          isRejected = true;
        }
      }

      const resultTitle = document.getElementById(
        "result-title"
      ) as HTMLHeadingElement;

      if (!isRejected && n === m) {
        resultTitle.textContent = "Aceptado";
        resultTitle.style.color = "green";
      } else {
        resultTitle.textContent = "Rechazado";
        resultTitle.style.color = "red";
        const lastRow = resultTable.insertRow();
        lastRow.insertCell().textContent = n.toString();
        lastRow.insertCell().textContent = xn.toString();
        lastRow.insertCell().textContent = `(${a}(${xn}) + ${c}) mod ${m} = ${Math.floor(
          (a * xn + c) / m
        )} + ${(a * xn + c) % m} / ${m}`;

        lastRow.insertCell().textContent = `${(a * xn + c) % m} / ${m}`;
      }
    }
  });

  updateEquation();
});
