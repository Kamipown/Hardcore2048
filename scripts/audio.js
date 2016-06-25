var Audio =
{
	bgm: undefined,
	snd: [],
	vol: 1,

	init: function()
	{

		this.bgm = document.createElement("audio");
		this.bgm.src = "snd/dulcet.mp3";
		this.bgm.loop = true;

		var reaper = document.createElement("audio");
		var reaper_speak = document.createElement("audio");
		var reaper_laugh = document.createElement("audio");
		var move = document.createElement("audio");
		var poison = document.createElement("audio");
		var wall = document.createElement("audio");
		var skull = document.createElement("audio");

		reaper.src = "snd/reaper.wav";
		reaper_speak.src = "snd/reaper_speak.wav";
		reaper_laugh.src = "snd/reaper_laugh.wav";
		move.src = "snd/move.wav";
		poison.src = "snd/poison.wav";
		wall.src = "snd/wall.wav";
		skull.src = "snd/skull.wav";
		
		this.snd["reaper"] = reaper;
		this.snd["reaper_speak"] = reaper_speak;
		this.snd["reaper_laugh"] = reaper_laugh;
		this.snd["move"] = move;
		this.snd["poison"] = poison;
		this.snd["wall"] = wall;
		this.snd["skull"] = skull;

		this.set_bgm_volume(this.vol);
		this.set_snd_volume(this.vol);

		this.play_bgm();
	},

	play_bgm: function()
	{
		this.bgm.play();
	},

	play_snd: function(name)
	{
		this.snd[name].play();
	},

	set_bgm_volume: function(v)
	{
		this.bgm.volume = v * 0.5;
	},

	set_snd_volume: function(v)
	{
		this.snd["reaper"].volume = v * 0.5;
		this.snd["reaper_speak"].volume = v;
		this.snd["reaper_laugh"].volume = v;
		this.snd["move"].volume = v * 0.5;
		this.snd["poison"].volume = v * 0.5;
		this.snd["wall"].volume = v * 0.5;
		this.snd["skull"].volume = v * 0.5;
	}
}
