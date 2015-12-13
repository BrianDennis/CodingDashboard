
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

function linkSetter(linkArray){
  if(linkArray.length > 0){
    for (var i = 0; i < linkArray.length; i++){
      switch(linkArray[i].type){
        case 'node':
          $('#nodeLink1').href = linkArray[i].link;
          $('#nodeLink1').innerHTML = linkArray[i].name;

        case 'react':
          $('#reactLink1').href = linkArray[i].link;
          $('#reactLink1').innerHTML = linkArray[i].name;

        case 'angular':
          $('#angularLink1').href = linkArray[i].link;
          $('#angularLink1').innerHTML = linkArray[i].name;
      }
    }
  }
}


$('document').ready(function(){

  var nodeHome = new link('node','https://nodejs.org/en/','Node Home Page');
  var reactHome = new link('react','https://facebook.github.io/react/','React Home Page');
  var angularHome = new link('angular','https://angularjs.org/','Angular Home Page');

  var links = [nodeHome,reactHome,angularHome];

  console.log($('#nodeLink1').href);

  linkSetter(links);
  setSoundCloud();
});
