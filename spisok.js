$(document).ready(function(){
	function addCase() {
		var name = $('input').val(),
		    message = $('textarea').val();
		if(!name) {
   			alert('Введи название!')
   			return false
   		}
   		else if (!message) {
   			alert('Введи описание!')
   			return false
   		}    
		if (name.length !== 0 && message.length !== 0) {
		$('.case-none').hide(),
        $('.get-case-boss').append(`
    	    <div class="get-case">
			   <button class="case_delete"></button>
			   <button class="case_hide"></button>
			   <div class="left_name">${name}</div>
			   <div class="left_case">${message}</div>
			</div>   
    	`);
    	$('input').val('');
		$('textarea').val('');
	}
}
	$('.button_case').on('click', addCase);

	$('body').on('click', '.case_delete', function(){
		var get = $(this).parents('.get-case');
		get.remove();
		
    var get = $('.get-case')
    if (get.length == 0) {
    	$('.case-none').show();
    } 
	});
	$('body').on('click', '.case_hide', function() {
		$(this).parents('.get-case').find('.left_case').slideToggle('').toggleClass('active');
    });
});