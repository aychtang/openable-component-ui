// Module that handles state and dom for toggling hideable/showable sidebar.
// Container el should be passed as el to container.
// Visible tab or open button should be passed as tab to constructor.

var classlist = require('class-list');

var SideBar = function(el, tab) {
	this.el = el;
	this.tab = tab;
	this.cl = classlist(el);
	this.isOpen = false;
};

SideBar.prototype.init = function() {
	var self = this;
	this.tab.addEventListener('click', function(e) {
		self.toggle();
	});
};

SideBar.prototype.open = function() {
	this.cl.add('open');
	this.isOpen = true;
};

SideBar.prototype.close = function() {
	this.cl.remove('open');
	this.isOpen = false;
};

SideBar.prototype.toggle = function() {
	this.cl.toggle('open');
	this.isOpen = !this.isOpen;
};

SideBar.prototype.isOpened = function() {
	return this.isOpen;
};

module.exports = SideBar;
