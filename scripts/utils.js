function for_each_block(block, callback)
{
	for (var x = 0; x < 4; ++x)
		for (var y = 0; y < 4; ++y)
			callback(block[x][y]);
}

function rand_range(min, max)
{
	return (Math.floor(Math.random() * (max - min + 1) + min));
}
