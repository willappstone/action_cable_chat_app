$(document).on('turbolinks:load', function() {
    
})

const messages_appender = function(message) {
    $('#messages-table').append(message);
}