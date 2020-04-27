/* eslint-disable camelcase */
declare module 'ytpl' {
	export default function(id: string, options?: YtplOptions): Promise<PlaylistInfo>;
	export function validateURL(url: string): boolean;
	export function getPlaylistID(url: string): Promise<string>;
}

export interface YtplOptions {
	limit: number;
}

export interface SongData {
	id: string;
	url: string;
	url_simple: string;
	title: string;
	thumbnail: string;
	duration: string;
	author: {
		name: string;
		ref: string;
	};
}
export interface PlaylistInfo {
	id: string;
	url: string;
	title: string;
	visibility: string;
	description: string;
	total_items: number;
	views: number;
	last_updated: string;
	author: PlaylistAuthor;
	items: SongData[];
}
export interface PlaylistAuthor {
	id: string;
	name: string;
	avatar: string;
	user: string;
	channel_url: string;
	user_url: string;
}
