const thumbs = document.getElementById('thumbs');

thumbs.onclick = event =>{
  const itemOfList = event.target.closest('a');

  if (!itemOfList){

    return;
  }
  getItemFromList(itemOfList.href, itemOfList.title);
  event.preventDefault();
};

const largeImg = document.getElementById('largeImg');

const getItemFromList = (href, title) => {
  largeImg.src = href;
  largeImg.alt = title;
};