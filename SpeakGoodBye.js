(function()
{
	var byeSpeaker={};
	var speakWord="GoodBye";
	byeSpeaker.speak= function speak(i)
	{
		console.log(speakWord+" "+i);
	}
	window.byeSpeaker=byeSpeaker;
})(window);