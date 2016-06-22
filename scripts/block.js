function block()
{
	this.dom = undefined;
	this.value = undefined;

	this.init = function()
	{
		this.x = 5;
		this.y = 6;
	}

	this.log = function()
	{
		console.log(this.x + " " + this.y);
	}

	this.delete = function()
	{
		this.dom.ParentNode.removeChild(this.dom);
	}
}
