# Brexit Means Breadsticks (Chrome Extension)
### A chrome extension that turns the word brexit into breadsticks on all pages.
#### Credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
#### You can install the Chrome Extension [here](https://chrome.google.com/webstore/detail/brexit-means-breadsticks/okbmmlhhebmgpjgjhffamejlcgclpkkh)

![Brexit means Breadsticks](https://github.com/nkhil/Brexit_means_Breadsticks/blob/master/showcase.png "Brexit Means Breadsticks")

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

Also, there is another working solution listed on [9to5google](https://9to5google.com/2015/06/14/how-to-make-a-chrome-extensions/) which uses `for loops`, which I was trying to avoid. 

I ended up using Steven Frank's solution, but I might still iterate and find my own solution to this, since I know I'm on the right track. 

