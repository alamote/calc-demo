const output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
const inlineActions = document.getElementsByClassName('inline-action');

for (let i = 0; i < numbers.length; i++) {
	numbers.item(i).addEventListener('click', event => {
		if (output.value === '0') {
			output.value = '';
		}
		output.value += event.target.innerHTML;
	});
}
for (let i = 0; i < inlineActions.length; i++) {
	inlineActions.item(i).addEventListener('click', event => {
		if (/\d$/.test(output.value)) {
			output.value += event.target.innerHTML;
		}
	});
}
document.getElementById('ce').addEventListener('click', () => {
	output.value = '0';
});
document.getElementById('period').addEventListener('click', () => {
	if (output.value.indexOf('.') === -1) {
		output.value += '.';
	}
});
document.getElementById('equal').addEventListener('click', () => {
	output.value = eval(output.value);
});




