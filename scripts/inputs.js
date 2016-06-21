var Inputs =
{
	up: false,
	right: false,
	down: false,
	left: false,

	init: function()
	{
		window.addEventListener("keydown", this.key_down, false);
		window.addEventListener("keyup", this.key_up, false);
	},

	key_down: function(event)
	{
		if ((event.keyCode == 38 || event.keyCode == 87) && !Inputs.up)
		{
			Inputs.up = true;
			Game.move_up();
		}
		else if ((event.keyCode == 39 || event.keyCode == 68) && !Inputs.right)
		{
			Inputs.right = true;
			Game.move_right();
		}
		else if ((event.keyCode == 40 || event.keyCode == 83) && !Inputs.down)
		{
			Inputs.down = true;
			Game.move_down();
		}
		else if ((event.keyCode == 37 || event.keyCode == 65) && !Inputs.left)
		{
			Inputs.left = true;
			Game.move_left();
		}
	},

	key_up: function(event)
	{
		if ((event.keyCode == 38 || event.keyCode == 87) && Inputs.up)
			Inputs.up = false;
		else if ((event.keyCode == 39 || event.keyCode == 68) && Inputs.right)
			Inputs.right = false;
		else if ((event.keyCode == 40 || event.keyCode == 83) && Inputs.down)
			Inputs.down = false;
		else if ((event.keyCode == 37 || event.keyCode == 65) && Inputs.left)
			Inputs.left = false;
	}
}
