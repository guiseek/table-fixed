(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Component = {
  transclude: true,
  bindings: {
    rows: '='
  },
  template: '\n    <div id="flex-table-container">\n      <div class="flex-table">\n        <div class="flex-table-content">\n          <table class="table" script-transclude>\n          </table>\n        </div>\n      </div>\n    </div>\n  ',
  controller: ['$scope', '$attrs', '$timeout', '$element', function ($scope, $attrs, $timeout, $element) {
    var ctrl = this,
        tableContent = $element[0].querySelector('.flex-table-content'),
        trFixRel = tableContent.querySelector('tr.fixrel'),
        thFixed = tableContent.querySelector('th.fixed'),
        tdFixRel = tableContent.querySelectorAll('td.fixrel'),
        td = void 0,
        tr = void 0,
        trHeight = trFixRel.clientHeight,
        thFixedWidth = thFixed.clientWidth;

    var thFirst = tableContent.querySelector('th.fixed:first-child');

    tableContent.addEventListener('scroll', function (evt) {
      var trFixRel = tableContent.querySelector('tr.fixrel');
      var thFixRel = tableContent.querySelector('th.fixrel');
      var tdFixRel = tableContent.querySelectorAll('td.fixrel');

      trFixRel.classList.add('fixed');
      trFixRel.style.marginLeft = -evt.target.scrollLeft;
      thFirst.style.marginLeft = evt.target.scrollLeft;

      for (td in tdFixRel) {
        tdFixRel[td].classList.add('fixed');
        tdFixRel[td].style.marginTop = -evt.target.scrollTop + trHeight;
        // tdFixRel[td].style.marginLeft = evt.target.scrollLeft
      }
    });
  }]
};

exports.default = Component;

},{}],2:[function(require,module,exports){
'use strict';

var _component = require('./component.js');

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('gumga.flextable', []).component('flexTable', _component2.default).directive('scriptTransclude', function () {
  return {
    compile: function compile(elem, attrs, transcludeFn) {
      transcludeFn(elem, function (clone) {
        $(elem).append($(clone).filter('script').text());
      });
    }
  };
});

},{"./component.js":1}]},{},[2]);
