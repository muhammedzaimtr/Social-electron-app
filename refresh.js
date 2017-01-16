$(document).ready(function() {

    $(document).on('click', 'a[href^="http"]', function(event) {
        const kel = require('electron').kel;
        event.preventDefault();
        kel.openExternal(this.href);
    });

});
