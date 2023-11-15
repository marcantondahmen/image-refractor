const sharp = require('sharp');
const fs = require('fs');
const assets = './dist/assets';

const GITHUB =
	'https://github.com/marcantondahmen/image-refractor/tree/gh-pages/assets';

const download = async (url, name) => {
	const response = await fetch(url);
	const arrBuffer = await response.arrayBuffer();

	await sharp(arrBuffer)
		.jpeg({ quality: 65, mozjpeg: true })
		.toFile(`${assets}/${name}.jpg`);
};

const getFiles = async (files) => {
	if (!fs.existsSync(assets)) {
		fs.mkdirSync(assets, { recursive: true });
	}

	for (const file of files) {
		console.log(file.name);

		try {
			console.log(`Try downloading ${file.name} from GitHub ...`);

			await download(`${GITHUB}/${file.name}.jpg`, file.name);
		} catch (error) {
			console.log(
				`File ${file.name} not yet in repository, falling back to ${file.url}`,
			);

			await download(file.url, file.name);
		}
	}
};

getFiles([
	// https://unsplash.com/photos/a-black-and-white-photo-of-a-mountain-range-9QbuKUPFaNI
	{
		url: 'https://source.unsplash.com/9QbuKUPFaNI/1400x1400',
		name: 'mountains',
	},

	// https://unsplash.com/photos/a-black-and-white-photo-of-a-rock-formation-3OpOV8ntLj4
	{
		url: 'https://source.unsplash.com/3OpOV8ntLj4/1400x1400',
		name: 'rocks',
	},

	// https://unsplash.com/photos/a-circular-object-with-a-black-background-Jzf8cyxg76g
	{
		url: 'https://source.unsplash.com/Jzf8cyxg76g/1400x1400',
		name: 'ring',
	},
]);
