Package.describe({
	name: 'sorenpeterson:reactive-var-operations',
	version: '0.0.1',
	// Brief, one-line summary of the package.
	summary: 'Adds operators to reactive var making them easier to use',
		// URL to the Git repository containing the source code for this package.
	git: 'github.com/sorenpeterson/reactive-var-operations',
		// By default, Meteor will default to using README.md for documentation.
		// To avoid submitting documentation, set this field to null.
	documentation: 'README.md'
});

Package.onUse(function(api) {
	api.versionsFrom('1.1.0.2');
	api.use('reactive-var');
	api.addFiles('reactive-var-operations.js');
});

Package.onTest(function(api) {
	api.use('tinytest');
	api.use('reactive-var');
	api.use('sorenpeterson:reactive-var-operations');
	api.addFiles('reactive-var-operations-tests.js');
});
