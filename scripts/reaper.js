var Reaper =
{
	dom: document.getElementById("reaper"),
	text: document.getElementById("reaper_text"),

	shake: function()
	{
		Game.main.classList.add("shake");
		setTimeout(function()
		{
			Game.main.classList.remove("shake");
		}, 250);
		Audio.play_snd("reaper");
	},

	shake_top: function()
	{
		Game.main.classList.add("shake_top");
		setTimeout(function()
		{
			Game.main.classList.remove("shake_top");
		}, 100);
	},

	shake_right: function()
	{
		Game.main.classList.add("shake_right");
		setTimeout(function()
		{
			Game.main.classList.remove("shake_right");
		}, 100);
	},

	shake_bottom: function()
	{
		Game.main.classList.add("shake_bottom");
		setTimeout(function()
		{
			Game.main.classList.remove("shake_bottom");
		}, 100);
	},

	shake_left: function()
	{
		Game.main.classList.add("shake_left");
		setTimeout(function()
		{
			Game.main.classList.remove("shake_left");
		}, 100);
	},

	move: function()
	{
		this.dom.style.left = (Game.main.offsetLeft - 400) + "px";
		this.dom.style.bottom = (window.innerHeight - Game.main.offsetTop) + "px";
		setTimeout(function()
		{
			Reaper.dom.style.transition = "all 100ms";
			Reaper.dom.style.left = (Game.main.offsetLeft - 360) + "px";
			setTimeout(function()
			{
				Reaper.dom.style.left = (Game.main.offsetLeft - 400) + "px";
				Reaper.dom.style.transition = "all 250ms ease";
				setTimeout(function()
				{
					Reaper.dom.style.left = "32px";
					Reaper.dom.style.bottom = "32px";
				}, 200);
			}, 100);
			Reaper.shake();
		}, 500);
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

	anim_poison: function(block)
	{
		block.dom.classList.add("anim_poison");
		setTimeout(function()
		{
			block.dom.classList.remove("anim_poison");
			block.dom.style.backgroundColor = define_color(block.value);
		}, 100);
	},

	anim_skull: function(block)
	{
		block.dom.classList.add("anim_skull");
	}
}