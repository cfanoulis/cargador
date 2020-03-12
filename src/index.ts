import ytdl from 'ytdl-core';
// no proper typings
// eslint-disable-next-line @typescript-eslint/no-var-requires
const ytpl = require('ytpl');
import Ffmpeg from 'fluent-ffmpeg';
import {join} from 'path';
import ora from 'ora';

async function run(): Promise<void> {
	let [playlist, fileLocation] = process.argv.slice(2, 4);
	playlist = await ytpl.getPlaylistID(playlist);

	const songs: Array<[string, string]> = (await ytpl(playlist)).items.map((e: { id: string; title: string }) => [e.id, e.title]);
	if(!fileLocation) {
		console.log('No location provided! Please provide a location to save songs to');
		process.exit(1);
	}

	const spinner = ora('Started converting... this may take a while').start();
	let total = songs.length;
	let processed = 0;
	for (const song of songs) {

		const stream = Ffmpeg(ytdl(song[0], {quality: 'highestaudio', filter: 'audioonly'}));
		stream
			.on('end', () => {
				processed++;
				spinner.text = `Converted ${processed}/${total} songs (${Math.round((processed/total) * 100)}% done)`;
				if(processed === total) {
					spinner.succeed(`Converted ${processed} songs successfully, and saved them to ${fileLocation}`);
					process.exit(0);
				}
			})
			.audioBitrate(128)
			.saveToFile(join(fileLocation, `${song[1]}.mp3`));
	}
}
run();