var SideBar = require('../SideBar');

var container = document.querySelector('.side-bar');
var tab = document.querySelector('.bar-left', container);

window.sideBar = new SideBar(container, tab);
sideBar.init();
