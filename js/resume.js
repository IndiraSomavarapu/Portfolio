var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		/* Toggle between adding and removing the "active" class,
		   to highlight the button that controls the panel */
		this.classList.toggle("active");
		/* Toggle between hiding and showing the active panel */
		var panel = this.nextElementSibling;
		// if (panel.className == 'showJson') {
		// 	if (panel.style.maxHeight) {
		// 		panel.style.maxHeight = null;
		// 		if (panel.style.maxHeight=='0px'){
		// 			document.getElementById('showJson').style.display="none";
		// 		}	
		// 	} else {
		// 		panel.style.maxHeight = panel.scrollHeight + "px";	
		// 		// if (panel.style.maxHeight=='0px'){
		// 			document.getElementById('showJson').style.display="block";
		// 		// }
		// 	}
		// } else {
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		// }

		
	});
}

// document.querySelectorAll('.accordion').forEach(button => {
// 	button.addEventListener('click', () => {
// 		button.classList.toggle('accordian.active');

// 	})
// })


