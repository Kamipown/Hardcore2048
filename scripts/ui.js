var Ui =
{
	main: document.getElementById("main"),

	loading_div: document.getElementById("loading_div"),
	progression_div: document.getElementById("progression_div"),
	progression_text: document.getElementById("progression_text"),
	loading_state_text: document.getElementById("loading_state_text"),

	score: document.getElementById("score_text"),

	init: function()
	{

	},

	update_loading_progression: function(progression)
	{
		progression = Math.floor(progression);
		this.progression_text.innerHTML = progression + "%";
		this.progression_div.style.width = progression + "%";
	},

	update_loading_state_text: function(text)
	{
		this.loading_state_text.innerHTML = text;
	},

	update_progression_color: function(color)
	{
		this.progression_div.style.backgroundColor = color;
	},

	hide_loading_div: function()
	{
		this.loading_div.style.display = "none";
	},

	display_main: function()
	{
		this.main.style.display = "block";
	},

	update_score: function(n)
	{
		this.score.innerHTML = n;
	}
}