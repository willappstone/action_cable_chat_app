App.room = App.cable.subscriptions.create("RoomChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    if (data) {
      $('#messages-table').append ('<div class="message">' +
        '<div class="message-user">' + data.username + ":" + '</div>' +
        '<div class="message-content">' + data.content + '</div>' + '</div>')
    }
    // Called when there's incoming data on the websocket for this channel
  }
});

$(document).on('turbolinks:load', function() {
  submitMessage();
})

const submitMessage = function() {
  $('#message_content').on('keydown', function(event) {
    if(event.keyCode == 13) {
        $('input').click();
        event.target.value = '';
        event.preventDefault()
    }
  })
}