# Brexit Means Breadsticks (Chrome Extension)
### A chrome extension that turns the word brexit into breadsticks on all pages.
#### You can install the Chrome Extension [here](https://chrome.google.com/webstore/detail/brexit-means-breadsticks/okbmmlhhebmgpjgjhffamejlcgclpkkh)

![Brexit means Breadsticks](https://github.com/nkhil/Brexit_means_Breadsticks/blob/master/showcase.png "Brexit Means Breadsticks")

The code I ended up writing for this was:

```
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
```

The puzzling thing about this was that `.getElementsByTagName('*');` gets me parent nodes, but I need to look inside them for the text nodes, because that's what I'm trying to change. Adding another `.forEach()` and passing in the `childNodes` in there before using the `.replace()` method on it is what makes it work. 

**The following are the methods I tried prior to the code solution above.**

I did try to write this from scratch using something like 

```
  const words = [...document.body.getElementsByTagName('*')];

  const strip = words.forEach(element => {
      element.innerHTML.replace(/Brexit/gi, 'Breadsticks');
  });
```

However, I soon found that `.replace()` doesn't actually replace things in the DOM, and that I'd have to find another solution. 

I then tried something that worked *(Hurray!)*
```
  document.body.innerHTML = document.body.innerHTML.replace(/brexit/gi, 'Breadsticks');
```

but this also stripped out all kinds of things like `.eventListeners` from the page, which rendered apps like YouTube and Discord useless. Foiled again. 

I also found alternative solutons from a stranger on the internet:

```
  function replaceInDom(node, original, replacement) {
  if (node.nodeType === Node.TEXT_NODE) {
    node.textContent = node.textContent.replace(original, replacement);
  }
  if ((node = node.firstChild)) {
    do {
      replaceInDom(node, original, replacement);
    } while ((node = node.nextSibling));
  }
}
```
Which was great, because I've not come across `replaceInDom` before. 

There is another working solution listed on [9to5google](https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/) which uses `for loops`, which I was trying to avoid. 

I used Steven Frank's solution for a previous version, which you can find [on his cloud to butt code](https://github.com/panicsteve/cloud-to-butt/)


