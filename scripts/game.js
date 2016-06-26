var Game =
{
	main: document.getElementById("main"),
	board: document.getElementById("board"),
	blocks: undefined,
	score: 0,
	processing: false,
	moved: false,
	state: 0,

	init: function()
	{
		Res.init();
		Res.load();
	},

	init_game: function()
	{
		Inputs.init();
		this.init_blocks();
		this.add_first_block();
		this.log_blocks();
		Ui.hide_loading_div();
		Ui.display_main();
		Res.play_snd("dulcet");
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
		this.blocks[x][y].value = 1;
		this.blocks[x][y].dom = document.createElement("span");
		this.blocks[x][y].dom.className = "block";
		this.blocks[x][y].dom.innerHTML = 1;
		this.blocks[x][y].dom.style.backgroundColor = define_color(1);
		this.blocks[x][y].dom.style.left = 100 * x + 10 + "px";
		this.blocks[x][y].dom.style.top = 100 * y + 10 + "px";

		this.board.appendChild(this.blocks[x][y].dom);
		setTimeout(function(){ Game.blocks[x][y].dom.style.opacity = 1; }, 10);
		Reaper.speak("...")
		setTimeout(function(){ Reaper.speak("What ?"); Res.play_snd("reaper_speak"); }, 500);
		setTimeout(function(){ Reaper.speak("You thought you were going to play with some 2 and 4 ?"); }, 1500);
		
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
		if (this.state == 0)
		{
			this.blocks[x][y].value = rand_range(1, 2);
			this.blocks[x][y].dom.innerHTML = this.blocks[x][y].value;
			this.blocks[x][y].dom.style.backgroundColor = define_color(this.blocks[x][y].value);
		}
		else if (this.state == 1)
		{
			if (n >= 4)
			{
				this.blocks[x][y].value = rand_range(1, 2);
				this.blocks[x][y].dom.innerHTML = this.blocks[x][y].value;
				this.blocks[x][y].dom.style.backgroundColor = define_color(this.blocks[x][y].value);
			}
			else // poison
			{
				this.blocks[x][y].value = -1;
				this.blocks[x][y].dom.classList.add("poison");
			}
		}
		else if (this.state == 2)
		{
			if (n >= 8)
			{
				this.blocks[x][y].value = rand_range(1, 2);
				this.blocks[x][y].dom.innerHTML = this.blocks[x][y].value;
				this.blocks[x][y].dom.style.backgroundColor = define_color(this.blocks[x][y].value);
			}
			else if (n >= 4) // poison
			{
				this.blocks[x][y].value = -1;
				this.blocks[x][y].dom.classList.add("poison");
			}
			else // wall
			{
				this.blocks[x][y].value = -2;
				this.blocks[x][y].dom.classList.add("wall_01");
			}
		}
		else if (this.state == 3)
		{
			if (n >= 10)
			{
				this.blocks[x][y].value = rand_range(1, 2);
				this.blocks[x][y].dom.innerHTML = this.blocks[x][y].value;
				this.blocks[x][y].dom.style.backgroundColor = define_color(this.blocks[x][y].value);
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
		}
		this.board.appendChild(this.blocks[x][y].dom);
		setTimeout(function(){ Game.blocks[x][y].dom.style.opacity = 1; }, 20);
	},

	add_poison: function()
	{
		var pos = Game.find_pos();
		if (!pos)
		{
			console.log("Not enough space for a new block.");
			return ;
		}
		var x = pos.x;
		var y = pos.y;

		Game.blocks[x][y] = new block();
		Game.blocks[x][y].value = -1;
		Game.blocks[x][y].dom = document.createElement("span");
		Game.blocks[x][y].dom.className = "block poison";
		Game.blocks[x][y].dom.style.left = 100 * x + 10 + "px";
		Game.blocks[x][y].dom.style.top = 100 * y + 10 + "px";
		Game.board.appendChild(Game.blocks[x][y].dom);
		setTimeout(function(){ Game.blocks[x][y].dom.style.opacity = 1; }, 20);
	},

	add_wall: function()
	{
		var pos = Game.find_pos();
		if (!pos)
		{
			console.log("Not enough space for a new block.");
			return ;
		}
		var x = pos.x;
		var y = pos.y;

		Game.blocks[x][y] = new block();
		Game.blocks[x][y].value = -2;
		Game.blocks[x][y].dom = document.createElement("span");
		Game.blocks[x][y].dom.className = "block wall_01";
		Game.blocks[x][y].dom.style.left = 100 * x + 10 + "px";
		Game.blocks[x][y].dom.style.top = 100 * y + 10 + "px";
		Game.board.appendChild(Game.blocks[x][y].dom);
		setTimeout(function(){ Game.blocks[x][y].dom.style.opacity = 1; }, 20);
	},

	add_skull: function()
	{
		var pos = Game.find_pos();
		if (!pos)
		{
			console.log("Not enough space for a new block.");
			return ;
		}
		var x = pos.x;
		var y = pos.y;

		Game.blocks[x][y] = new block();
		Game.blocks[x][y].value = -5;
		Game.blocks[x][y].dom = document.createElement("span");
		Game.blocks[x][y].dom.className = "block skull";
		Game.blocks[x][y].dom.style.left = 100 * x + 10 + "px";
		Game.blocks[x][y].dom.style.top = 100 * y + 10 + "px";
		Game.board.appendChild(Game.blocks[x][y].dom);
		setTimeout(function(){ Game.blocks[x][y].dom.style.opacity = 1; }, 20);
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
		this.moved = false;
		if (!this.processing)
		{
			this.processing = true;
			if (d == 0) this.move_up();
			else if (d == 1) this.move_right();
			else if (d == 2) this.move_down();
			else if (d == 3) this.move_left();
		}
	},

	move_up: function()
	{
		for (var x = 0; x < 4; ++x)
		{
			for (var y = 1; y < 4; ++y)
			{
				if (this.blocks[x][y]) // Normal block
				{
					var ty = y;
					while (ty - 1 >= 0 && !this.blocks[x][ty - 1])
						--ty;
					if (this.blocks[x][y].value > 0)
					{
						if (ty == 0 || (this.blocks[x][ty - 1].value > 0 && this.blocks[x][y].value != this.blocks[x][ty - 1].value && ty != y))
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][y].value == this.blocks[x][ty - 1].value) // Fusion
							this.block_fusion(x, y, x, ty - 1);
						else if (this.blocks[x][ty - 1].value == -1) // Poison
							this.block_to_poison(x, y, x, ty - 1);
						else if (this.blocks[x][ty - 1].value <= -2 && this.blocks[x][ty - 1].value >= -4 && ty != y) // Wall
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][ty - 1].value == -5) // Skull
							this.block_to_skull(x, y, x, ty - 1);
					}
					else if (this.blocks[x][y].value == -1) // Poison block
					{
						if (ty == 0 || (this.blocks[x][ty - 1].value < 0 && ty != y))
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][ty - 1].value > 0)
							this.poison_to_block(x, y, x, ty - 1);
					}
					else if (this.blocks[x][y].value <= -2 && this.blocks[x][y].value >= -4) // Wall block
					{
						if (ty != y)
							this.wall_move(x, y, x, ty, 0);
					}
					else if (this.blocks[x][y].value == -5) // Skull block
					{
						if (ty == 0 || (this.blocks[x][ty - 1].value < 0 && ty != y))
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][ty - 1].value > 0)
							this.skull_to_block(x, y, x, ty - 1);
					}
				}
			}
		}
		this.end_move();
	},

	move_right: function()
	{
		for (var y = 0; y < 4; ++y)
		{
			for (var x = 2; x >= 0; --x)
			{
				if (this.blocks[x][y]) // Normal block
				{
					var tx = x;
					while (tx + 1 < 4 && !this.blocks[tx + 1][y])
						++tx;
					if (this.blocks[x][y].value > 0)
					{
						if (tx == 3 || (this.blocks[tx + 1][y].value > 0 && this.blocks[x][y].value != this.blocks[tx + 1][y].value && tx != x))
							this.block_move(x, y, tx, y);
						else if (this.blocks[x][y].value == this.blocks[tx + 1][y].value) // Fusion
							this.block_fusion(x, y, tx + 1, y);
						else if (this.blocks[tx + 1][y].value == -1) // Poison
							this.block_to_poison(x, y, tx + 1, y);
						else if (this.blocks[tx + 1][y].value <= -2 && this.blocks[tx + 1][y].value >= -4 && tx != x)
							this.block_move(x, y, tx, y);
						else if (this.blocks[tx + 1][y].value == -5) // Skull
							this.block_to_skull(x, y, tx + 1, y);
					}
					else if (this.blocks[x][y].value == -1) // Poison block
					{
						if (tx == 3 || (this.blocks[tx + 1][y].value < 0 && tx != x))
							this.block_move(x, y, tx, y);
						else if (this.blocks[tx + 1][y].value > 0)
							this.poison_to_block(x, y, tx + 1, y);
					}
					else if (this.blocks[x][y].value <= -2 && this.blocks[x][y].value >= -4) // Wall block
					{
						if (tx != x)
							this.wall_move(x, y, tx, y, 1);
					}
					else if (this.blocks[x][y].value == -5) // Skull block
					{
						if (tx == 3 || (this.blocks[tx + 1][y].value < 0 && tx != x))
							this.block_move(x, y, tx, y);
						else if (this.blocks[tx + 1][y].value > 0)
							this.skull_to_block(x, y, tx + 1, y);
					}
				}
			}
		}
		this.end_move();
	},

	move_down: function()
	{
		for (var x = 0; x < 4; ++x)
		{
			for (var y = 2; y >= 0; --y)
			{
				if (this.blocks[x][y]) // Normal block
				{
					var ty = y;
					while (ty + 1 < 4 && !this.blocks[x][ty + 1])
						++ty;
					if (this.blocks[x][y].value > 0)
					{
						if (ty == 3 || (this.blocks[x][ty + 1].value > 0 && this.blocks[x][y].value != this.blocks[x][ty + 1].value && ty != y))
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][y].value == this.blocks[x][ty + 1].value) // Fusion
							this.block_fusion(x, y, x, ty + 1);
						else if (this.blocks[x][ty + 1].value == -1) // Poison
							this.block_to_poison(x, y, x, ty + 1);
						else if (this.blocks[x][ty + 1].value <= -2 && this.blocks[x][ty + 1].value >= -4 && ty != y)
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][ty + 1].value == -5) // Skull
							this.block_to_skull(x, y, x, ty + 1);
					}
					else if (this.blocks[x][y].value == -1) // Poison block
					{
						if (ty == 3 || (this.blocks[x][ty + 1].value < 0 && ty != y))
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][ty + 1].value > 0)
							this.poison_to_block(x, y, x, ty + 1);
					}
					else if (this.blocks[x][y].value <= -2 && this.blocks[x][y].value >= -4) // Wall block
					{
						if (ty != y)
							this.wall_move(x, y, x, ty, 0);
					}
					else if (this.blocks[x][y].value == -5) // Skull block
					{
						if (ty == 3 || (this.blocks[x][ty + 1].value < 0 && ty != y))
							this.block_move(x, y, x, ty);
						else if (this.blocks[x][ty + 1].value > 0)
							this.skull_to_block(x, y, x, ty + 1);
					}
				}
			}
		}
		this.end_move();
	},

	move_left: function()
	{
		for (var y = 0; y < 4; ++y)
		{
			for (var x = 1; x < 4; ++x)
			{
				if (this.blocks[x][y]) // Normal block
				{
					var tx = x;
					while (tx - 1 >= 0 && !this.blocks[tx - 1][y])
						--tx;
					if (this.blocks[x][y].value > 0)
					{
						if (tx == 0 || (this.blocks[tx - 1][y].value > 0 && this.blocks[x][y].value != this.blocks[tx - 1][y].value && tx != x))
							this.block_move(x, y, tx, y);
						else if (this.blocks[x][y].value == this.blocks[tx - 1][y].value) // Fusion
							this.block_fusion(x, y, tx - 1, y);
						else if (this.blocks[tx - 1][y].value == -1) // Poison
							this.block_to_poison(x, y, tx - 1, y);
						else if (this.blocks[tx - 1][y].value <= -2 && this.blocks[tx - 1][y].value >= -4 && tx != x)
							this.block_move(x, y, tx, y);
						else if (this.blocks[tx - 1][y].value == -5) // Skull
							this.block_to_skull(x, y, tx - 1, y);
					}
					else if (this.blocks[x][y].value == -1) // Poison block
					{
						if (tx == 0 || (this.blocks[tx - 1][y].value < 0 && tx != x))
							this.block_move(x, y, tx, y);
						else if (this.blocks[tx - 1][y].value > 0)
							this.poison_to_block(x, y, tx - 1, y);
					}
					else if (this.blocks[x][y].value <= -2 && this.blocks[x][y].value >= -4) // Wall block
					{
						if (tx != x)
							this.wall_move(x, y, tx, y, 3);
					}
					else if (this.blocks[x][y].value == -5) // Skull block
					{
						if (tx == 0 || (this.blocks[tx - 1][y].value < 0 && tx != x))
							this.block_move(x, y, tx, y);
						else if (this.blocks[tx - 1][y].value > 0)
							this.skull_to_block(x, y, tx - 1, y);
					}
				}
			}
		}
		this.end_move();
	},

	end_move: function()
	{
		var self = this;
		setTimeout(function()
		{
			if (self.moved == true)
			{
				self.add_block();
				self.log_blocks();
			}
			self.processing = false;
		}, 100);
		this.check_lose();
	},

	block_move: function(px, py, dx, dy)
	{
		this.moved = true;
		var tmp_block = this.blocks[px][py];
		this.blocks[px][py] = 0;
		this.blocks[dx][dy] = tmp_block;
		this.blocks[dx][dy].dom.style.left = dx * 100 + 10 + "px";
		this.blocks[dx][dy].dom.style.top = dy * 100 + 10 + "px";
		Res.play_snd("move");
	},

	block_fusion: function(px, py, dx, dy)
	{
		this.moved = true;
		this.blocks[dx][dy].value *= 2;
		this.blocks[dx][dy].dom.innerHTML = this.blocks[dx][dy].value;
		this.blocks[dx][dy].dom.style.backgroundColor = define_color(this.blocks[dx][dy].value);
		this.add_score(this.blocks[dx][dy].value);
		Animation.scale(this.blocks[dx][dy]);
		var tmp_block = this.blocks[px][py];
		this.blocks[px][py] = 0;
		tmp_block.dom.style.zIndex = 3;
		tmp_block.dom.style.left = this.blocks[dx][dy].dom.style.left;
		tmp_block.dom.style.top = this.blocks[dx][dy].dom.style.top;
		setTimeout(function() { tmp_block.dom.parentNode.removeChild(tmp_block.dom); }, 100);
	},

	block_to_poison: function(px, py, dx, dy)
	{
		this.moved = true;
		var tmp_block = this.blocks[px][py];
		var tmp_poison = this.blocks[dx][dy];
		this.blocks[px][py] = 0;
		this.blocks[dx][dy] = tmp_block;
		if (tmp_block.value > 1)
		{
			tmp_block.value /= 2;
			tmp_block.dom.innerHTML = tmp_block.value;
		}
		tmp_poison.dom.style.zIndex = 3;
		tmp_block.dom.style.left = tmp_poison.dom.style.left;
		tmp_block.dom.style.top = tmp_poison.dom.style.top;
		Animation.poison(tmp_block);
		setTimeout(function()
		{
			tmp_poison.dom.parentNode.removeChild(tmp_poison.dom);
			Res.play_snd("poison");
		}, 100);
	},

	poison_to_block: function(px, py, dx, dy)
	{
		this.moved = true;
		var tmp_poison = this.blocks[px][py];
		this.blocks[px][py] = 0;
		if (this.blocks[dx][dy].value > 1)
		{
			this.blocks[dx][dy].value /= 2;
			this.blocks[dx][dy].dom.innerHTML = this.blocks[dx][dy].value;
		}
		tmp_poison.dom.style.zIndex = 3;
		tmp_poison.dom.style.left = this.blocks[dx][dy].dom.style.left;
		tmp_poison.dom.style.top = this.blocks[dx][dy].dom.style.top;
		Animation.poison(this.blocks[dx][dy]);
		setTimeout(function()
		{
			tmp_poison.dom.parentNode.removeChild(tmp_poison.dom);
			Res.play_snd("poison");
		}, 100);
	},

	block_to_skull: function(px, py, dx, dy)
	{
		this.moved = true;
		var tmp_block = this.blocks[px][py];
		var tmp_skull = this.blocks[dx][dy];
		this.blocks[px][py] = 0;
		this.blocks[dx][dy] = 0;
		tmp_skull.dom.style.zIndex = 3;
		tmp_block.dom.style.left = tmp_skull.dom.style.left;
		tmp_block.dom.style.top = tmp_skull.dom.style.top;
		Animation.skull(tmp_block);
		setTimeout(function()
		{
			tmp_block.dom.parentNode.removeChild(tmp_block.dom);
			tmp_skull.dom.parentNode.removeChild(tmp_skull.dom);
			Res.play_snd("skull");
			Reaper.laugh();
		}, 100);
	},

	skull_to_block: function(px, py, dx, dy)
	{
		this.moved = true;
		var tmp_skull = this.blocks[px][py];
		var tmp_block = this.blocks[dx][dy];
		this.blocks[px][py] = 0;
		this.blocks[dx][dy] = 0;
		tmp_skull.dom.style.zIndex = 3;
		tmp_skull.dom.style.left = tmp_block.dom.style.left;
		tmp_skull.dom.style.top = tmp_block.dom.style.top;
		Animation.skull(tmp_block);
		setTimeout(function()
		{
			tmp_skull.dom.parentNode.removeChild(tmp_skull.dom);
			tmp_block.dom.parentNode.removeChild(tmp_block.dom);
			Res.play_snd("skull");
			Reaper.laugh();
		}, 100);
	},

	wall_move: function(px, py, dx, dy, d)
	{
		this.moved = true;
		var tmp_wall = this.blocks[px][py];
		this.blocks[px][py] = 0;
		if (tmp_wall.value == -4)
		{
			tmp_wall.dom.style.left = dx * 100 + 10 + "px";
			tmp_wall.dom.style.top = dy * 100 + 10 + "px";
			setTimeout(function()
			{
				tmp_wall.dom.parentNode.removeChild(tmp_wall.dom);
			}, 100);
		}
		else
		{
			--tmp_wall.value;
			this.blocks[dx][dy] = tmp_wall;
			this.blocks[dx][dy].dom.style.left = dx * 100 + 10 + "px";
			this.blocks[dx][dy].dom.style.top = dy * 100 + 10 + "px";
			var self = this;
			setTimeout(function()
			{
				if (self.blocks[dx][dy].value == -3)
				{
					self.blocks[dx][dy].dom.classList.remove("wall_01");
					self.blocks[dx][dy].dom.classList.add("wall_02");
				}
				else if (self.blocks[dx][dy].value == -4)
				{
					self.blocks[dx][dy].dom.classList.remove("wall_02");
					self.blocks[dx][dy].dom.classList.add("wall_03");
				}
			}, 100);
		}
		setTimeout(function()
		{
			if (d == 0) Animation.shake_top();
			else if (d == 1) Animation.shake_right();
			else if (d == 2) Animation.shake_bottom();
			else if (d == 3) Animation.shake_left();
			Res.play_snd("wall");
		}, 100);
	},

	add_score: function(n)
	{
		this.score += n;
		Ui.update_score(this.score);
		if (n == 8 && this.state == 0)
		{
			++this.state;
			Reaper.move_poison();
		}
		else if (n == 32 && this.state == 1)
		{
			++this.state;
			Reaper.move_wall();
		}
		else if (n == 128 && this.state == 2)
		{
			++this.state;
			Reaper.move_skull();
		}
	},

	check_lose: function()
	{
		if (this.find_pos()) return ;
		for (var x = 0; x < 4; ++x)
		{
			for (var y = 0; y < 4; ++y)
			{
				if (this.blocks[x][y].value > 0)
				{
					if (x < 3)
					{
						if (this.blocks[x + 1][y].value == this.blocks[x][y].value || this.blocks[x + 1][y].value == -1 || this.blocks[x + 1][y].value == -5)
							return ;
					}
					if (x > 0)
					{
						if (this.blocks[x - 1][y].value == this.blocks[x][y].value || this.blocks[x - 1][y].value == -1 || this.blocks[x - 1][y].value == -5)
							return ;
					}
					if (y < 3)
					{
						if (this.blocks[x][y + 1].value == this.blocks[x][y].value || this.blocks[x][y + 1].value == -1 || this.blocks[x][y + 1].value == -5)
							return ;
					}
					if (y > 0)
					{
						if (this.blocks[x][y - 1].value == this.blocks[x][y].value || this.blocks[x][y - 1].value == -1 || this.blocks[x][y - 1].value == -5)
							return ;
					}
				}
			}
		}
		this.lose();
	},

	lose: function()
	{
		Ui.update_score(0);
		this.state = 0;
		this.score = 0;
		for_each_block(this.blocks, function(block)
		{
			if (block)
				block.dom.parentNode.removeChild(block.dom);
		});
		this.init_blocks();
		this.add_first_block();
		this.log_blocks();
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
