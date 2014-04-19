(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// contains, add, remove, toggle
var indexof = require('indexof')

module.exports = ClassList

function ClassList(elem) {
    var cl = elem.classList

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    }

    return classList

    function add(token) {
        var list = getTokens()
        if (indexof(list, token) > -1) {
            return
        }
        list.push(token)
        setTokens(list)
    }

    function remove(token) {
        var list = getTokens()
            , index = indexof(list, token)

        if (index === -1) {
            return
        }

        list.splice(index, 1)
        setTokens(list)
    }

    function contains(token) {
        return indexof(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token)
            return false
        } else {
            add(token)
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens()
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length

        elem.className = list.join(" ")
        classList.length = length

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i]
        }

        delete list[length]
    }
}

function filter (arr, fn) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) ret.push(arr[i])
    }
    return ret
}

function isTruthy(value) {
    return !!value
}

},{"indexof":2}],2:[function(require,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],3:[function(require,module,exports){
// Module that handles state and dom for toggling hideable/showable sidebar.
// Container el should be passed as el to container.
// openEl is the element that should toggle the components state on click.

var classlist = require('class-list');

var Openable = function(el, openEl) {
	this.el = el;
	this.openEl = openEl;
	this.cl = classlist(el);
	this.isOpen = false;
};

Openable.prototype.init = function() {
	var self = this;
	this.openEl.addEventListener('click', function(e) {
		self.toggle();
	});
};

Openable.prototype.open = function() {
	this.cl.add('open');
	this.isOpen = true;
};

Openable.prototype.close = function() {
	this.cl.remove('open');
	this.isOpen = false;
};

Openable.prototype.toggle = function() {
	this.cl.toggle('open');
	this.isOpen = !this.isOpen;
};

Openable.prototype.isOpened = function() {
	return this.isOpen;
};

module.exports = Openable;

},{"class-list":1}],4:[function(require,module,exports){
var Openable = require('../../Openable');

var container = document.querySelector('.side-bar');
var tab = document.querySelector('.bar-left', container);

window.sideBar = new Openable(container, tab);
sideBar.init();

},{"../../Openable":3}]},{},[4])