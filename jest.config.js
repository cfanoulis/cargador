module.exports = {
	coverageDirectory: './coverage',
	coverageProvider: 'v8',
	displayName: 'Unit tests',
	preset: 'ts-jest',
	testEnvironment: 'node',
	globals: {
		'ts-jest': {
			tsConfig: '__tests__/tsconfig.json'
		}
	}
};
