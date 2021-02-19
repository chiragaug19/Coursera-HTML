(function()
{
	var helloSpeaker={};
	var speakWord="Hello";
	helloSpeaker.speak= function speak(i)
	{
		console.log(speakWord+" "+i);
	}
	window.helloSpeaker=helloSpeaker;
})(window);