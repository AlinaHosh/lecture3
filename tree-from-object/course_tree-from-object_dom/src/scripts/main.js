const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, obj) {
  const expandingList = document.createElement('ul');

  element.append(expandingList);

  for(const elementFromList of Object.keys(obj)){
    const elementInExpandingList = document.createElement('li');

    elementInExpandingList.innerText = elementFromList;
    expandingList.append(elementInExpandingList);

    if(Object.keys(obj[elementFromList]).length) {
      createTree(elementInExpandingList, obj[elementFromList]);
    }
  }
}
createTree(tree, food);

