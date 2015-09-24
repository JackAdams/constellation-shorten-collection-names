// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;

var initialValue = JSON.parse(localStorage.constellation_shortened_collection_names || 'false');

Constellation.addTab({
  name: 'Shorten names',
  headerContentTemplate: 'Constellation_shortened_collection_names',
  noOpen:true,
  onClick: "toggleShortenedCollectionNames",
  addBaseClass: (initialValue) ? 'Constellation-shortened-collection-names' : ''
});

Constellation.registerCallbacks({
  toggleShortenedCollectionNames : function () {
	ShortenedCollectionNamesDict.set('Constellation_shortened_collection_names', !ShortenedCollectionNamesDict.get('Constellation_shortened_collection_names'));
	toggleShortenedCollectionNames(ShortenedCollectionNamesDict.get('Constellation_shortened_collection_names'));
  }
});

ShortenedCollectionNamesDict = new ReactiveDict('Constellation_shortened_collection_names');
ShortenedCollectionNamesDict.setDefault('Constellation_shortened_collection_names', initialValue);

var toggleShortenedCollectionNames = function (isShortened) {
  if (isShortened) {
	Constellation.addBaseClass('Constellation-shortened-collection-names');
  }
  else {
	Constellation.removeBaseClass('Constellation-shortened-collection-names');
  }
  localStorage.constellation_shortened_collection_names = isShortened;
}

Template.Constellation_shortened_collection_names.helpers({
  shortened: function () {
    return ShortenedCollectionNamesDict.get('Constellation_shortened_collection_names');  
  }
});
	