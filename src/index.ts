#!/usr/bin/env node

import {processSongs} from './lib/processSongs';
import {homedir} from 'os';
import {join} from 'path';
import meow from 'meow';
import {extractPlaylist} from './lib/extractPlaylist';
import {extractSongs} from './lib/extractSongs';
import {mkdirSync} from 'fs';

async function run(): Promise<void> {
	const cli = meow([
		`Version ${process.env.npm_package_version ?? '... wait, where\'s the version?'}`,
		'',
		'Usage:',
		'$ cg <url> [save location]',
		'',
		'Flags:',
		'-h, --help => Show this message',
		'-m, --makefolders => Creates the destination folder, if it doesn\'t exist',
		'-v, --version => Shows cargador\'s version',
		'',
		'Copyright © 2020 Charalampos Fanoulis',
		'Report bugs or issues at https://github.com/cfanoulis/cargador'
	].join('\n'), {
		flags: {
			makefolders: {
				type: 'boolean',
				alias: 'm'
			}
		}
	});

	const playlist = await extractPlaylist(cli.input[0]);
	const location = cli.input[1] || join(homedir(), 'Downloads', 'cargador');

	if (cli.flags.makefolders) {
		mkdirSync(location);
	}

	const songs = await extractSongs(playlist);
	await processSongs(songs, location);
}

run();
