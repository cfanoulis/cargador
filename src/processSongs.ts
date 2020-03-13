import ytdl from 'ytdl-core';
import Ffmpeg from 'fluent-ffmpeg';
import { join } from 'path';
import ora from 'ora';

export async function processSongs(songs: string[][], fileLocation: string): Promise<void> {
	let spinner = ora('Started converting... this may take a while').start();

	let total = songs.length - 1;
	let processed = 0;
	let errored = 0;

	for (const song of songs) {
		try {
			const stream = Ffmpeg(ytdl(song[0], { quality: 'highestaudio', filter: 'audioonly' }));
			stream
				.on('end', () => {
					processed++;
					spinner.text = `Converted ${processed}/${total - errored} ${errored > 1 ? '' : `(${errored} errored)`} videos (${Math.round((processed / total) * 100)}% done)`;
					if (processed === total) {
						spinner.succeed(`Converted ${processed - errored} videos successfully, and saved them to ${fileLocation}`);
						process.exit(0);
					}
				})
				.on('error', (e) => {
					// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
					spinner.fail(`Failed to convert. Error:\n ${e}`);
					spinner = ora(`Converted ${processed}/${total - errored} ${errored > 1 ? '' : `(${errored} errored)`} videos (${Math.round((processed / total) * 100)}% done)`).start();
					errored++;
					if(errored <= total) return;
					spinner.fail('Couldn\'t convert anything :(');
					process.exit(1);
				} )
				.audioBitrate(128)
				.saveToFile(join(fileLocation, `${song[1]}.mp3`));
		} catch(e) {
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			spinner.fail(`Failed to convert. Error:\n ${e}`);
			spinner = ora(`Converted ${processed}/${total - errored} ${errored > 1 ? '' : `(${errored} errored)`} videos (${Math.round((processed / total) * 100)}% done)`).start();
			errored++;
		}
	}
}
