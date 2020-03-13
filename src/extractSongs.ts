// eslint-disable-next-line @typescript-eslint/no-var-requires
const ytpl = require('ytpl');

export async function extractSongs(playlist: string): Promise<string[][]> {
	return (await ytpl(playlist)).items.map((e: {
		id: string;
		title: string;
	}) => [e.id, e.title]) as string[][];
}
