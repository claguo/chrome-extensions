//REPLACE Cs WITH LINKS + ROTATE IMGS
function replace() {
  function replaceTextWithLink(text) {
    return text.replace(/c/g, '<a class="claire" href="https://claireguo.com" target="_blank">c</a>');
  }
  const elements = document.getElementsByTagName('p', 'h1', 'span', 'h2', 'h3', 'h4', 'li', 'td', 'a');
  for (const element of elements) {
      const text = element.textContent;
      element.innerHTML = replaceTextWithLink(text)
  }
  const imgs = document.getElementsByTagName('img');
  for (el of imgs) {
    el.style['transform'] = 'rotate(180deg)'
  }
}
replace();


//ALT TEXT INPUT
const altContainer = document.createElement("div");
altContainer.style.display = 'flex';
altContainer.style.flexWrap = 'wrap';
const imgs = document.getElementsByTagName('img');
for (img of imgs) {
  const alt = img.getAttribute('alt');
  const altInput = document.createElement("input");
  altInput.type = "text";
  altInput.name = "alt text";
  altInput.id = "altInput";
  altInput.value = alt;
  // img.parentNode.replaceChild(altInput, img);
  altContainer.appendChild(altInput);
  altInput.addEventListener('focus', () => {
    altInput.style.backgroundColor = "#d7f542";
  });
  altInput.addEventListener("blur", () => {
    altInput.style.backgroundColor = "";
  });
}
document.body.appendChild(altContainer);



//HIGHLIGHT C LINKS ON HOVER + STYLING
const cLinks = document.getElementsByClassName("claire");
for (el of cLinks) {
  el.style['text-decoration'] = 'none';
  el.style['color'] = 'blue';
  el.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#d7f542';
  });
  el.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = '';
  });
}


//COLOR PICKER
const container = document.createElement("div");
const sparkle = document.createElement("span");
const label = document.createElement("label");
const colorPicker = document.createElement("input");

container.style.position = "absolute";
container.style.top = "100px";
container.style.left = "100px";
container.style.backgroundColor = "white";
container.style.borderRadius = "1.5rem";
container.style.padding = "0.5rem 1.25rem"
sparkle.textContent = "⋆⭒˚｡⋆₊ ⊹ good job ⋆⭒˚｡⋆₊ ⊹";
sparkle.style.backgroundColor = "#d7f542";
label.textContent = "pick a color ";
label.setAttribute("for", "colorPicker");
colorPicker.type = "color";
container.appendChild(label);
container.appendChild(colorPicker);

colorPicker.addEventListener("input", () => {
  container.appendChild(sparkle);

  setTimeout(() => {
    // sparkle.style.opacity = "0";
    container.removeChild(sparkle);
  }, 500);
})
document.body.appendChild(container);


//CLICK AND DRAG HEADINGS
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
console.log(headings);
let mousePosition;
let offset = [0,0];
let isDown = false;
let selected = null;

headings.forEach(elt => {
  elt.style['background-color'] = '#d7f542';
  elt.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
      elt.offsetLeft - e.clientX,
      elt.offsetTop - e.clientY
    ];
    selected = elt;
  }, true);
});

document.addEventListener('mouseup', function() {
    isDown = false;
    selected = null;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown && selected) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        selected.style.position = "absolute";
        selected.style.left = (mousePosition.x + offset[0]) + 'px';
        selected.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);