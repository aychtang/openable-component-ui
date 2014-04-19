var Openable = require('../../Openable');

var container = document.querySelector('.side-bar');
var tab = document.querySelector('.bar-left', container);

window.sideBar = new Openable(container, tab);
sideBar.init();
