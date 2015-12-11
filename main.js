
function setSoundCloud(){
  //get soundcloud widget
  var iFrameElement;
  SC.initialize({
    client_id: 'jibJab'
  });

  var track_url = 'https://soundcloud.com/zweihander-logan/sets/hollental';
  SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
    $('#content').html(oEmbed.html);
    $('iframe').width(400);
  });
}

function link (type, link, name){
  this.type = type;
  this.link = link;
  this.name = name;
}

var nodeHome = new link('node','https://nodejs.org/en/','Node Home Page');
console.log(nodeHome);

setSoundCloud();
