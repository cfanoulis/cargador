module.exports = {
	coverageDirectory: './coverage',
	coverageProvider: 'v8',
	coverageReporter: ['text', 'html', 'cobertura'],
	displayName: 'Unit tests',
	preset: 'ts-jest',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsConfig: '__tests__/tsconfig.json'
		}
	}
};
