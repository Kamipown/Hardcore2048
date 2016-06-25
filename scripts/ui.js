var Ui =
{
	score: document.getElementById("score_text"),

	init: function()
	{

	},

	update_score: function(n)
	{
		this.score.innerHTML = n;
	}
}