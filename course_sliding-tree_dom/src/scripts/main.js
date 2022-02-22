const tree = document.getElementById('tree');
const li = document.querySelectorAll('li');


for (const elementOfList of li) {
  
  const span = document.createElement('span');

  elementOfList.prepend(span);
  span.append(span.nextSibling); 
}


tree.onclick = function() {

  if (event.target.tagName != 'SPAN') {
    return;
  }

  const expandingList = event.target.parentNode.querySelector('ul');

  if (!expandingList) {
    return;
  }

  expandingList.hidden = !expandingList.hidden;
};
