$(document).ready(() => {
	$('#person-button').on('click', function(ev) {
		$.ajax({
			url: "http://localhost:5000/users",
			data: 'json'
		}).done(data => console.log(data));
	})
})