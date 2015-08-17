"use strict";

Package.describe({
  name: 'brettle:workaround-issue-4331',
  version: '0.0.2',
  summary:
    'Workaround Meteor issue 4331 - Only first client onLogin callback called',
  git: 'https://github.com/brettle/meteor-workaround-issue-4331',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4');
  api.use('accounts-base', 'client');
  api.use('underscore', 'client');
  api.use('callback-hook', 'client');
  api.imply('accounts-base');
  api.addFiles('workaround-issue-4331.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('brettle:accounts-testing-support');
  api.use('brettle:workaround-issue-4331');
  api.addFiles('workaround-issue-4331-tests.js', 'client');
});
