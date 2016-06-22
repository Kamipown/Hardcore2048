var Game =
{
	board: document.getElementById("board"),
	blocks: undefined,
	score: 0,

	init: function()
	{
		this.init_blocks();
		this.add_first_block();
	},

	init_blocks: function()
	{
		this.blocks = [];
		for (var i = 0; i < 4; ++i)
		{
			this.blocks[i] = [];
			for (var j = 0; j < 4; ++j)
			{
				this.blocks[i][j] = 0;
			}
		}
	},

	add_first_block: function()
	{
		var x = rand_range(0, 3);
		var y = rand_range(0, 3);

		this.blocks[x][y] = new block();
		this.blocks[x][y].value = rand_range(1, 2);
		this.blocks[x][y].dom = document.createElement("span");
		this.blocks[x][y].dom.className = "block";
		this.blocks[x][y].dom.innerHTML = this.blocks[x][y].value;
		this.blocks[x][y].dom.style.left = 100 * x + 10 + "px";
		this.blocks[x][y].dom.style.top = 100 * y + 10 + "px";

		this.board.appendChild(this.blocks[x][y].dom);
		this.log_blocks();
	},

	add_block: function()
	{
		var zeros = 0;
		for_each_block(this.blocks, function(block)
		{
			if (!block) ++zeros;
		});
		var new_block = document.createElement("span");
		new_block.className = "block";
		new_block.style.top = "210px";
		new_block.style.left = "110px";
		new_block.innerHTML = "1";
		var n = rand_range(0, 99);
		if (n >= 55)
			;
		else if (n >= 10) // division
			;
		else if (n >= 6) // division
			;
		else if (n >= 2) // wall
			;
		else // Crane
			;
		this.board.appendChild(new_block);
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

	log_blocks: function()
	{
		console.log("- | Blocks :");
		for (var y = 0; y < 4; ++y)
		{
			var l = y + " | ";
			for (var x = 0; x < 4; ++x)
			{
				if (this.blocks[x][y])
					l += this.blocks[x][y].value + ", ";
				else
					l += "0, "
			}
			console.log(l);
		}
	}
}
