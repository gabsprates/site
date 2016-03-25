window.ready = (function () {
  var links = document.getElementsByClassName('btn');
  var mnObj = document.getElementById("links-menu");
  for (var i = 0 ; i < links.length ; i++) {
    links[i].addEventListener("mouseenter", function(){
      var text = this.getAttribute("title");
      addNode(mnObj, "p", text);
    });
    links[i].addEventListener("focus", function(){
      var text = this.getAttribute("title");
      addNode(mnObj, "p", text);
    });
    links[i].addEventListener("mouseleave", function(){
      var text = this.getAttribute("title");
      remNode(mnObj, "p");
    });
    links[i].addEventListener("blur", function(){
      var text = this.getAttribute("title");
      remNode(mnObj, "p");
    });
  }


  var request = new XMLHttpRequest();
  request.open('GET', 'links.json', true);

  request.onload = function() {
    var nav = document.getElementById("links-uteis__lista");
    if (request.status >= 200 && request.status < 400) {

      remNode(nav, 'div');
      var data = JSON.parse(request.responseText);
      geraLinks(data);

    } else {
      remNode(nav, 'div');
      addNode(nav, 'p', "Não foi possível carregar a lista de links.");
      addNode(nav, 'p', " Desculpe =/");
    }
  };

  request.onerror = function() {
    // There was a connection error of some sort
  };

  request.send();


})();

function remNode(pai, elem) {
  if (!elem || !pai) {
    return false;
  }
  var elemts = pai.getElementsByTagName(elem)
  if (elemts)
    for (var i = 0; i < elemts.length; i++) {
      pai.removeChild(elemts[i]);
    }

}
function addNode(pai, elem, text) {
  if (!elem || !pai) {
    return false;
  }

  elem = document.createElement(elem);
  if (text) {
    text = document.createTextNode(text);
    elem.appendChild(text);
  }

  pai.appendChild(elem);
  return elem;
}

function geraLinks(data) {
  data = data.links;
  var nav   = document.getElementById("links-uteis__lista");
  var count = data.length;
  var linkA = "";
  var linkT = "";
  var linkD = "";
  for (var i = 0; i < count; i++) {
    linkA = "";
    linkT = "";
    linkD = "";

    console.log(data[i]);
    linkA = addNode(nav, 'a');
    linkT = addNode(linkA, 'strong', data[i].titulo);
    linkD = addNode(linkA, 'span', data[i].about);
    linkA.href = data[i].link;
    linkA.title = data[i].titulo;

  }
}
