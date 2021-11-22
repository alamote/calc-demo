const output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
for (let i = 0; i < numbers.length; i++) {
	numbers.item(i).addEventListener('click', event => {
		output.value += event.target.innerHTML;
	});
}
document.getElementById('ce').addEventListener('click', () => {
	output.value = '';
});





