var Inputs =
{
	up: false,
	right: false,
	down: false,
	left: false,
	lock: true,

	init: function()
	{
		window.addEventListener("keydown", this.key_down, false);
		window.addEventListener("keyup", this.key_up, false);
	},

	key_down: function(event)
	{
		if (Inputs.lock == false)
		{
			if ((event.keyCode == 38 || event.keyCode == 87) && !Inputs.up)
			{
				Inputs.up = true;
				Game.move(0);
			}
			else if ((event.keyCode == 39 || event.keyCode == 68) && !Inputs.right)
			{
				Inputs.right = true;
				Game.move(1);
			}
			else if ((event.keyCode == 40 || event.keyCode == 83) && !Inputs.down)
			{
				Inputs.down = true;
				Game.move(2);
			}
			else if ((event.keyCode == 37 || event.keyCode == 65) && !Inputs.left)
			{
				Inputs.left = true;
				Game.move(3);
			}
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
