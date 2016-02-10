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
}
