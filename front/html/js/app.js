/**
 * App 
 * TO-DO: Remove entirely JQuery. JQuery is just for tests
 * TO-DO: Convert to Redux-style app
 * TO-DO: Utilize CSS-in-JS and Custom TAGS
 */

$( document ).ready(function() {

	let game = $('#board-container');
	const GAME_WIDTH = game.outerWidth();
	const GAME_HEIGHT = game.outerHeight();
	const GAME_POSITION_TOP  = game.position().top;
	const GAME_POSITION_LEFT = game.position().left;

    $('.pj').on('click', function() {
    	position = $(this).position();
    	//console.log( position );
    	$('#inner-board-container > *').each( function( i ) {
    		let pos = $(this).position();
    		$(this).css(
	    		{ 
	    			'left': pos.left + position.left - GAME_WIDTH, 
	    		    'top':  pos.top + position.top - GAME_HEIGHT 
	    		}
	    	);
    	});
    });
});