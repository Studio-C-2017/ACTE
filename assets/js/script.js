$( ".menuButtonExit" ).hide();
$( ".menu" ).hide();
$( ".menuButton" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".menuButton" ).hide();
$( ".menuButtonExit" ).show();
});
});

$( ".menuButtonExit" ).click(function() {
$( ".menu" ).slideToggle( "slow", function() {
$( ".menuButtonExit" ).hide();
$( ".menuButton" ).show();
});
});
