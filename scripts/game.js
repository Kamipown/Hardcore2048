var Game =
{
	cells: undefined,

	init: function()
	{
		this.init_cells();
		console.log(this.cells);
	},

	init_cells: function()
	{
		this.cells = [];
		for (var i = 0; i < 4; ++i)
		{
			this.cells[i] = [];
			for (var j = 0; j < 4; ++j)
			{
				this.cells[i][j] = 0;
			}
		}
	},

	move_up: function()
	{
		
	},

	move_right: function()
	{
		
	},

	move_down: function()
	{
		
	},

	move_left: function()
	{
		
	},
}
