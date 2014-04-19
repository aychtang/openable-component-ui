// Module for toggling hideable/showable sidebar state.
// Container el should be passed as el to container.
// Visible tab or open button should be passed as tab to constructor.

var classlist = require('class-list');

var SideBar = function(el, tab) {
	this.el = el;
	this.tab = tab;
	this.cl = classlist(el);
	this.open = false;
};

SideBar.prototype.init = function() {
	var self = this;
	this.tab.addEventListener('click', function(e) {
		self.toggle();
	});
};

SideBar.prototype.toggle = function() {
	this.cl.toggle('open');
	this.open = !this.open;
};

SideBar.prototype.isOpen = function() {
	return this.open;
};

module.exports = SideBar;
