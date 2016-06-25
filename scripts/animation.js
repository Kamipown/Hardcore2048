var Animation =
{
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
}