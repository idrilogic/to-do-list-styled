function newElement() {

	// Adding the input value to the list
	var inputValue = document.getElementById('inputValue').value;
	var li = document.createElement('li');
	var takingValue = document.createTextNode(inputValue);

	li.appendChild(takingValue);


	// display an alert message if added an empty task
	if (inputValue === "") {
		alert('You must type something!');
	} else {
		document.querySelector('.ullists').append(li);
		document.querySelector('#inputValue').value = '';
	}


	// Creating "X" to remove unwanted list
	var span = document.createElement('span');
	var text = document.createTextNode('\u00D7');
	span.className = "close";
	span.appendChild(text);
	li.appendChild(span);


	// when someone clicks on "X", remove the list
	var close = document.getElementsByClassName('close');
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			var div = this.parentElement;
			div.style.display = "none";
		}
	}
}

document.addEventListener('click', function(event) {
	if (event.target.tagName === 'LI') {
		event.target.classList.toggle('checked');
	}
})