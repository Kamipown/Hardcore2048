var Reaper =
{
	dom: document.getElementById("reaper"),
	text: document.getElementById("reaper_text"),

	move: function(callback)
	{
		var self = this;
		this.dom.style.left = (Game.main.offsetLeft - 400) + "px";
		this.dom.style.bottom = (window.innerHeight - Game.main.offsetTop) + "px";
		setTimeout(function()
		{
			self.dom.style.transition = "all 100ms";
			self.dom.style.left = (Game.main.offsetLeft - 360) + "px";
			setTimeout(function()
			{
				self.dom.style.left = (Game.main.offsetLeft - 400) + "px";
				self.dom.style.transition = "all 250ms ease";
				setTimeout(function()
				{
					self.dom.style.left = "32px";
					self.dom.style.bottom = "32px";
				}, 200);
			}, 100);
			Animation.shake();
			callback();
		}, 500);
	},

	move_poison: function()
	{
		Inputs.lock = true;
		var self = this;
		this.speak("Oh !");
		Res.play_snd("reaper_speak");
		setTimeout(function(){ self.speak("Look at that !"); }, 800);
		setTimeout(function(){ self.speak("This may be useful for you..."); }, 2000);
		setTimeout(function(){ self.move(Game.add_poison); Inputs.lock = false; }, 4000);
		setTimeout(function(){ self.speak("Ha ha ha !"); Res.play_snd("reaper_laugh"); }, 6000);
	},

	move_wall: function()
	{
		Inputs.lock = true;
		var self = this;
		this.speak("Hum...");
		Res.play_snd("reaper_speak");
		setTimeout(function(){ self.speak("Maybe this one ?"); }, 800);
		setTimeout(function(){ self.move(Game.add_wall); Inputs.lock = false;}, 2000);
		setTimeout(function(){ self.speak("Ha ha ha !"); Res.play_snd("reaper_laugh"); }, 4000);
	},

	move_skull: function()
	{
		Inputs.lock = true;
		var self = this;
		this.speak("Grrr !");
		Res.play_snd("reaper_speak");
		setTimeout(function(){ self.speak("This block is too damn high !"); }, 800);
		setTimeout(function(){ self.move(Game.add_skull); Inputs.lock = false;}, 3000);
		setTimeout(function(){ self.speak("Ha ha ha !"); Res.play_snd("reaper_laugh"); }, 5000);
	},

	speak: function(s)
	{
		this.text.innerHTML = "";
		var t = "";
		for (var i = 0; i < s.length; ++i)
		{
			t += s[i];
			this.speek_loop(t, 40 * i);
		}
	},

	speek_loop: function(t, delay)
	{
		setTimeout(function()
		{
			Reaper.text.innerHTML = t;
		}, delay);
	},

	laugh: function()
	{
		this.dom.className = "laugh";
		Res.play_snd("reaper_laugh");
		var self = this;
		setTimeout(function()
		{
			self.dom.className = "stand";
		}, 800);
	}
}