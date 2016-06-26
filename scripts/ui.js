var Ui =
{
	main: document.getElementById("main"),

	loading_div: document.getElementById("loading_div"),
	progression_div: document.getElementById("progression_div"),
	progression_text: document.getElementById("progression_text"),
	loading_state_text: document.getElementById("loading_state_text"),

	reaper: document.getElementById("reaper"),
	reaper_text: document.getElementById("reaper_text"),

	score: document.getElementById("score_text"),

	finish_div: document.getElementById("finish_div"),
	finish_score: document.getElementById("finish_score"),

	poison_count_p: document.getElementById("poison_count"),
	wall_count_p: document.getElementById("wall_count"),
	skull_count_p: document.getElementById("skull_count"),

	poison_count: 0,
	wall_count: 0,
	skull_count: 0,

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

	display_reaper: function()
	{
		this.reaper.style.display = "block";
		this.reaper_text.style.display = "block";
	},

	update_score: function(n)
	{
		this.score.innerHTML = n;
	},

	update_poison_count: function()
	{
		this.poison_count_p.innerHTML = "x" + ++this.poison_count;
	},

	update_wall_count: function()
	{
		this.wall_count_p.innerHTML = "x" + ++this.wall_count;
	},

	update_skull_count: function()
	{
		this.skull_count_p.innerHTML = "x" + ++this.skull_count;
	},

	display_finish: function()
	{
		this.finish_score.innerHTML = this.score.innerHTML;
		this.finish_div.style.display = "block";
	},

	reset_finish: function()
	{
		this.finish_score.innerHTML = 0;
		this.finish_div.style.display = "none";
	},

	reset_counts: function()
	{
		this.poison_count_p.innerHTML = "x0";
		this.wall_count_p.innerHTML = "x0";
		this.skull_count_p.innerHTML = "x0";
		this.poison_count = 0;
		this.wall_count = 0;
		this.skull_count = 0;
	}
}