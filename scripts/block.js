function block()
{
	this.dom = undefined;
	this.value = undefined;

	this.create = function()
	{
		this.dom = document.createElement("span");
		this.dom.className = "block";
	}

	this.set_value = function(n)
	{
		this.value = n;
		this.dom.innerHTML = n;
		this.dom.style.backgroundColor = define_color(n);
	}

	this.set_poison = function()
	{
		this.value = -1;
		this.dom.classList.add("poison");
		Ui.update_poison_count();
	}

	this.set_wall = function()
	{
		this.value = -2;
		this.dom.classList.add("wall_01");
		Ui.update_wall_count();
	}

	this.set_skull = function()
	{
		this.value = -5;
		this.dom.classList.add("skull");
		Ui.update_skull_count();
	}

	this.set_position = function(x, y)
	{
		this.dom.style.left = 100 * x + 10 + "px";
		this.dom.style.top = 100 * y + 10 + "px";
	}

	this.copy_position = function(block)
	{
		this.dom.style.left = block.dom.style.left;
		this.dom.style.top = block.dom.style.top;
	}

	this.show = function()
	{
		var self = this;
		Game.board.appendChild(this.dom);
		setTimeout(function()
		{
			self.dom.style.opacity = 1;
		}, 10);
	}

	this.delete = function()
	{
		this.dom.parentNode.removeChild(this.dom);
	}
}
