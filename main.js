
function setSoundCloud(){
  //get soundcloud widget
  var iFrameElement;
  SC.initialize({
    client_id: 'jibJab'
  });

  var track_url = 'https://soundcloud.com/zweihander-logan/sets/hollental';
  SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    $('#content').html(oEmbed.html);
    console.log('iframe: ' + $('iframe').width());
    $('iframe').width(400);
  });
}

setSoundCloud();
