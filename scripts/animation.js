var Animation =
{
	shake: function()
	{
		Game.main.classList.add("shake");
		setTimeout(function()
		{
			Game.main.classList.remove("shake");
		}, 250);
		Res.play_snd("reaper_hit");
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

	poison: function(block)
	{
		block.dom.classList.add("anim_poison");
		setTimeout(function()
		{
			block.dom.classList.remove("anim_poison");
			block.dom.style.backgroundColor = define_color(block.value);
		}, 100);
	},

	skull: function(block)
	{
		block.dom.classList.add("anim_skull");
	},

	scale: function(block)
	{
		block.dom.classList.remove("anim_scale");
		setTimeout(function()
		{
			block.dom.classList.add("anim_scale");
		}, 20);
	}
}