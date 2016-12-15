import FlexTable from './component.js'

angular
  .module('gumga.flextable', [])
  .component('flexTable', FlexTable)
  .directive('scriptTransclude', function() {
    return {
      compile: function(elem, attrs, transcludeFn) {
        transcludeFn(elem, function(clone){
          $(elem).append($(clone).filter('script').text());
        });
      }
    };
  });