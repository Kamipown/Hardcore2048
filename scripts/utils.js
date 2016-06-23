function define_color(n)
{
	if (n == 1) return ("#6281d0");
	else if (n == 2) return ("#4e71ca");
	else if (n == 4) return ("#3b62c4");
	else if (n == 8) return ("#3558b1");
	else if (n == 16) return ("#2f4e9d");
	else if (n == 32) return ("#294489");
	else if (n == 64) return ("#233b76");
	else if (n == 128) return ("#1d3162");
	else if (n == 256) return ("#17274f");
	else if (n == 512) return ("#121d3b");
	else if (n == 1024) return ("#0c1427");
	else if (n == 2048) return ("#060a14");
	else if (n == 4096) return ("#000000");
	else if (n == 8192) return ("#000000");
	else if (n == 16384) return ("#000000");
	else if (n == 32768) return ("#000000");
	else if (n == 65536) return ("#000000");
	else if (n == 131072) return ("#000000");
	else return ("#");
}

function for_each_block(block, callback)
{
	for (var y = 0; y < 4; ++y)
		for (var x = 0; x < 4; ++x)
			callback(block[x][y]);
}

function rand_range(min, max)
{
	return (Math.floor(Math.random() * (max - min + 1) + min));
}
