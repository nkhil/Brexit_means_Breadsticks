/*jshint esversion: 6 */


var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag
//console.log(elementsInsideBody);

//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        child.nodeValue = child.nodeValue.replace(/brexit/gi, 'breadsticks');
      }
    });

  });
}

window.onload = findAndReplace();
