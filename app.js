const color1 = document.getElementById("color1");
const label1 = document.querySelector(`label[for="${color1.id}"]`);

const color2 = document.getElementById("color2");
const label2 = document.querySelector(`label[for="${color2.id}"]`);

const degree = document.getElementById("deg");
const degreesSpan = document.querySelector(".degrees-value");

const body = document.querySelector("body");

color1.value = label1.textContent;
color2.value = label2.textContent;

body.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;

degree.addEventListener("input", () => {
	degreesSpan.textContent = `${degree.value}°`;
	body.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;
});

color1.addEventListener("input", () => {
	label1.textContent = color1.value;
	body.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;
});

color2.addEventListener("input", () => {
	label2.textContent = color2.value;
	body.style.background = `linear-gradient(${degree.value}deg, ${color1.value}, ${color2.value})`;
});


const copyBtn = document.querySelector(".copy-btn");
const spanCopy = copyBtn.querySelector("span");

copyBtn.addEventListener("click", (e) => {
	handleCopy(e);
});

let isCopied = false;

function handleCopy (e) {
	if (!isCopied) {
		isCopied = true;
		spanCopy.textContent = "Copied";

		setTimeout(() => {
			spanCopy.textContent = "Copy";
			isCopied = false;
		}, 1250)
	}
	const textToCopy = body.style.background;
	navigator.clipboard.writeText(textToCopy)
}

const randomBtn = document.querySelector(".random-btn");
const randomSpan = randomBtn.querySelector("span");

randomBtn.addEventListener("click", () => {
	handleRandom();
});

let isRandom = false;

function handleRandom () {
	const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
	const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
	const randomDegree = Math.floor(Math.random() * 360);

	label1.textContent = randomColor1;
	label2.textContent = randomColor2;
	degree.value = randomDegree;
	degreesSpan.textContent = `${randomDegree}°`;
	body.style.background = `linear-gradient(${randomDegree}deg, #${randomColor1}, #${randomColor2})`;
}