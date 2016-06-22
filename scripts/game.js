var Game =
{
	board: document.getElementById("board"),
	blocks: undefined,
	score: 0,

	init: function()
	{
		this.init_blocks();
		this.add_first_block();
		this.log_blocks();
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
	},

	add_block: function()
	{
		var pos = this.find_pos();
		if (!pos)
		{
			console.log("Not enough space for a new block.");
			return ;
		}
		var x = pos.x;
		var y = pos.y;

		this.blocks[x][y] = new block();
		this.blocks[x][y].dom = document.createElement("span");
		this.blocks[x][y].dom.className = "block";
		this.blocks[x][y].dom.style.left = 100 * x + 10 + "px";
		this.blocks[x][y].dom.style.top = 100 * y + 10 + "px";

		var n = rand_range(0, 99);
		if (n >= 10)
		{
			this.blocks[x][y].value = rand_range(1, 2);
			this.blocks[x][y].dom.innerHTML = this.blocks[x][y].value;
		}
		else if (n >= 6) // poison
		{
			this.blocks[x][y].value = -1;
			this.blocks[x][y].dom.classList.add("poison");
		}
		else if (n >= 2) // wall
		{
			this.blocks[x][y].value = -2;
			this.blocks[x][y].dom.classList.add("wall_01");
		}
		else // skull
		{
			this.blocks[x][y].value = -5;
			this.blocks[x][y].dom.classList.add("skull");
		}
		this.board.appendChild(this.blocks[x][y].dom);
	},

	find_pos: function()
	{
		var pos = {x: 0, y: 0};
		var zeros = 0;
		for_each_block(this.blocks, function(block) { if (!block) ++zeros; });
		zeros = rand_range(0, zeros - 1);
		for (var y = 0; y < 4; ++y)
			for (var x = 0; x < 4; ++x)
				if (!this.blocks[x][y])
				{
					if (zeros)
						--zeros;
					else
					{
						pos.x = x;
						pos.y = y;
						return (pos);
					}
				}
	},

	move: function(d)
	{
		if (d == 0) this.move_up();
		else if (d == 1) this.move_right();
		else if (d == 2) this.move_down();
		else if (d == 3) this.move_left();
		this.add_block();
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
