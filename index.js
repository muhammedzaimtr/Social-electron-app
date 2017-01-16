var menubar = require('menubar');

var mb = menubar({
    height: 750,
    width: 600
});

mb.on('ready', function ready() {
    console.log('Naber Güzellik :D ');
});
