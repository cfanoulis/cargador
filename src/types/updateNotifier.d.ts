declare module 'update-notifier' {
	export default class updateNotifier {
		constructor(options?: UpdateNotifierOptions);
		public notify(options?: NotifyOptions): void;
	}
}

interface NotifyOptions {
	defer?: boolean;
	message?: string;
}

interface UpdateNotifierOptions {
	pkg?: {
		readonly [key: string]: unknown;
		readonly name: string;
		readonly version: string;
	};
	updateCheckInterval?: number;
	shouldNotifyInNpmScript?: boolean;
	distTag?: string | 'latest';
}
