Package.describe({
  name: 'constellation:shorten-collection-names',
  version: '0.4.11',
  summary: 'Makes long collection names visible in Constellation',
  git: 'https://github.com/JackAdams/constellation-shorten-collection-names.git',
  documentation: 'README.md',
  debugOnly: true
});

Package.onUse(function(api) {
  api.versionsFrom(['1.8.2', '2.3']);

  api.use(['templating@1.3.2', 'reactive-dict', 'tracker'], 'client');
  api.use('constellation:console@1.4.11', 'client');

  api.addFiles('shorten-collection-names.css', 'client');
  api.addFiles('shorten-collection-names.html', 'client');
  api.addFiles('shorten-collection-names.js', 'client');
  
  api.imply('constellation:console');
});

Package.onTest(function(api) {
  api.use('tinytest');
});
