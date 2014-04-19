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
