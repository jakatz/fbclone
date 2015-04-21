$(document).ready(function() {
	$('.fa.fa-caret-up').click(function() {
		var parent = $(this).parents('li');
		parent.insertBefore(parent.prev());
	});

	$('.fa.fa-caret-down').click(function() {
		var parent = $(this).parents('li');
		parent.insertAfter(parent.next());
	});
});