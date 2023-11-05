function replace() {
//   const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// while (textNodes.nextNode()) {
//   const textNode = textNodes.currentNode;
//   const text = textNode.nodeValue;
//   const newText = text.replace(/c/g, '<span style="background-color: yellow;">c</span>');
//   const newTextNode = document.createElement('span');
//   newTextNode.innerHTML = newText;
//   textNode.parentNode.replaceChild(newTextNode, textNode);
// }
const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')
// for (let i=0; i < text.length; i++) {
//   console.log(text[i].innerHTML.includes("c"))
//   if (text[i].innerHTML.includes('c')) {
//     text[i].innerHTML.replace('c', 'ooooooooooooo')
//   }
// }
function replaceTextWithLink(text) {
  return text.replace(/c/g, '<a href="https://claireguo.com" target="_blank">c</a>');
}

const elements = document.getElementsByTagName('p', 'h1', 'span', 'h2', 'h3', 'h4', 'li', 'td', 'a');
for (const element of elements) {
  console.log(element.textContent)
    const text = element.textContent;
    const newText = text.replace(/o/g, 'ooooo');
    if (newText !== text) {
      element.textContent = newText;
      element.innerHTML = replaceTextWithLink(newText)
    }
}

const imgs = document.getElementsByTagName('img');
for (el of imgs) {
  el.style['transform'] = 'rotate(180deg)'
}

let paragraphs = document.getElementsByTagName('p', 'h1', 'span', 'h2');
for (elt of paragraphs) {
  elt.style['background-color'] = '#00b85c'
}
}

replace();

function myFunction(event) {
      const emoji = document.getElementById('emoji');

  if (event.key === 'm') {
    alert('Key pressed: m');

    // const maxX = window.innerWidth;
    // const maxY = window.innerHeight;

    // const randomX = Math.floor(Math.random() * maxX);
    // const randomY = Math.floor(Math.random() * maxY);

    // emoji.style['left'] = randomX + 'px';
    // emoji.style['top'] = randomY + 'px';
    // emoji.style['display'] = 'block';
    //manipulating the DOM search
}
}

document.addEventListener('keydown', myFunction);