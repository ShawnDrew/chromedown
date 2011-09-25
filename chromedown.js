var converter = new Showdown.converter("");

$(document).ready(function(){
	$("pre").each(function () {
		$('body').append(converter.makeHtml($.trim($(this).text())));
		$(this).hide();
	});
});