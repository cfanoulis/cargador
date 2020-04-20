import {getPlaylistID} from 'ytpl';

export async function extractPlaylist(link: string | undefined): Promise<string> {
	let id = undefined;
	if (typeof link === 'undefined') {
		console.error('[ERROR] No playlist provided.');
		process.exit(1);
	}
	try {
		id = await getPlaylistID(link);
	} catch {
		console.error('[ERROR] Couldn\'t extract a playlist ID from that URL. Maybe check the spelling?');
		process.exit(2);
	}
	return id;
}
