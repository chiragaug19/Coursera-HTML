(function()
	{
		var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
		for (i in names)
		{
			if (names[i].charAt(0).toLowerCase()=='j')
				byeSpeaker.speak(names[i]);
			else
				helloSpeaker.speak(names[i]);
		}
	})()