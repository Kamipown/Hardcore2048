var Res =
{
	img_paths: [],
	img: [],
	img_loaded: 0,

	snd_paths: [],
	snd: [],
	snd_loaded: 0,

	vol: 1,

	mute_button: document.getElementById("mute_button"),

	init: function()
	{
		this.img_paths[0] = "img/reaper/reaper_stand.gif"
		this.img_paths[1] = "img/reaper/reaper_laugh.gif"
		this.img_paths[2] = "img/blocks/poison.png"
		this.img_paths[3] = "img/blocks/wall_01.png"
		this.img_paths[4] = "img/blocks/wall_02.png"
		this.img_paths[5] = "img/blocks/wall_03.png"
		this.img_paths[6] = "img/blocks/skull.png"

		this.snd_paths[0] = "snd/dulcet.mp3"
		this.snd_paths[1] = "snd/reaper_hit.wav";
		this.snd_paths[2] = "snd/reaper_speak.wav";
		this.snd_paths[3] = "snd/reaper_laugh.wav";
		this.snd_paths[4] = "snd/reaper_win.wav";
		this.snd_paths[5] = "snd/move.wav";
		this.snd_paths[6] = "snd/poison.wav";
		this.snd_paths[7] = "snd/wall.wav";
		this.snd_paths[8] = "snd/skull.wav";
	},

	load: function()
	{
		this.load_img();
	},

	load_img: function()
	{
		Ui.update_loading_state_text("Loading images ...");
		var self = this;
		for (var i = 0; i < this.img_paths.length; ++i)
		{
			this.img[i] = new Image();
			this.img[i].addEventListener("load", function()
			{
				++self.img_loaded;
				Ui.update_loading_progression(self.img_loaded * 100 / self.img_paths.length);
				if (self.img_loaded == self.img_paths.length)
				{
					setTimeout(function() { Ui.update_loading_progression(0); }, 250);
					setTimeout(function() { self.load_snd(); }, 500);
				}
			}, false);
			this.img[i].src = this.img_paths[i];
		}
	},

	load_snd: function()
	{
		Ui.update_loading_state_text("Loading sounds ...");
		Ui.update_progression_color("#407");
		var self = this;
		for (var i = 0; i < this.snd_paths.length; ++i)
		{
			this.snd[i] = document.createElement("audio");
			var sound_loaded = function(event)
			{
				event.target.removeEventListener("progress", sound_loaded, false);
				++self.snd_loaded;
				Ui.update_loading_progression(self.snd_loaded * 100 / self.snd_paths.length);
				if (self.snd_loaded == self.snd_paths.length)
					setTimeout(function() { Game.init_game(); }, 250);
			}
			this.snd[i].addEventListener("progress", sound_loaded, false, true);
			this.snd[i].src = this.snd_paths[i];
		}
		this.set_snd_settings(1);
	},

	set_snd_settings: function(v)
	{
		this.snd[0].volume = v * 0.5;
		this.snd[0].loop = true;
		this.snd[1].volume = v * 0.5;
		this.snd[2].volume = v;
		this.snd[3].volume = v;
		this.snd[4].volume = v;
		this.snd[5].volume = v * 0.5;
		this.snd[6].volume = v * 0.5;
		this.snd[7].volume = v * 0.5;
		this.snd[8].volume = v * 0.5;
	},

	play_snd: function(name)
	{
		if (name == "dulcet") this.snd[0].play();
		if (name == "reaper_hit") this.snd[1].play();
		if (name == "reaper_speak") this.snd[2].play();
		if (name == "reaper_laugh") this.snd[3].play();
		if (name == "reaper_win") this.snd[4].play();
		if (name == "move") this.snd[5].play();
		if (name == "poison") this.snd[6].play();
		if (name == "wall") this.snd[7].play();
		if (name == "skull") this.snd[8].play();
	},

	toggle_sounds: function()
	{
		if (this.vol == 1)
		{
			this.vol = 0;
			this.set_snd_settings(this.vol);
			this.mute_button.value = "Unmute";
		}
		else if (this.vol == 0)
		{
			this.vol = 1;
			this.set_snd_settings(this.vol);
			this.mute_button.value = "Mute";
		}
	}
}
