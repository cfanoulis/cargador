import ytpl from 'ytpl';

export async function extractSongs(playlist: string): Promise<string[][]> {
	const playlistData = await ytpl(playlist);
	return playlistData.items.map(e => [e.id, e.title]);
}
