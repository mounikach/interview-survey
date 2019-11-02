
var activeElement = document.querySelector('.fran.active');
var catidSelected = activeElement.dataset.catid;
var allItems = document.querySelector('.slick-track');
allItems.insertBefore(allItems.childNodes[4], allItems.childNodes[1]);
var allTrackSection = document.querySelector('.cat-off-screen-pane');
allTrackSection.insertBefore(allTrackSection.children[4], allTrackSection.children[1]);

var elementSection = document.querySelector('.anav.active');
var itemText = '';
var childElem = elementSection.children[1];
var span = null;
var item = document.createElement('div');
for (var i = 0; i < childElem.childElementCount; i++) {
    span = document.createElement('span');
    span.innerHTML = childElem.children[i].children[0].children[0].children[0].innerText;
    span.style.color = "#007db8"
    span.style.marginRight = "7px";
    span.addEventListener("mouseover", hoverEffect, false);
    span.addEventListener("click", clicked, false);
    item.appendChild(span);
}
item.className = 'text-blue';
activeElement.insertBefore(item, activeElement.firstChild);

function hoverEffect(event) {
    this.style.cursor = "pointer";
}
function clicked(event) {
    var elementSection = document.querySelector('.anav.active');
    var childElem = elementSection.children[1];
    for (var i = 0; i < childElem.childElementCount; i++) {
        var listitems = childElem.children[i].children[1];
        for (var j = 0; j < listitems.childElementCount; j++) {
            var metrics = listitems.children[j].children[0].dataset.metrics
            var textCaption = JSON.parse(metrics).anav_caption;
            if (textCaption == event.currentTarget.innerText) {
                listitems.children[j].children[0].checked = true;
            }
        }
    }
}
