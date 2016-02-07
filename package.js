Package.describe({
  name: 'mayankchhabra:autoform-switchery',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Custom Switchery Boolean Input for AutoForm',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:template-extension@3.4.3');
  api.use('aldeed:autoform@4.0.0 || 5.0.0');
  api.use('abpetkov:switchery@0.1.0');
  api.addFiles([
    'autoform-switchery.html',
    'autoform-switchery.js'
  ], 'client');
});
