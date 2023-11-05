// document.addEventListener("DOMContentLoaded", function () {
//   const highlightButton = document.getElementById("highlightButton");

//   highlightButton.addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       const activeTab = tabs[0];
//       chrome.scripting.executeScript({
//         target: { tabId: activeTab.id },
//         function: highlightLetterC,
//       });
//     });
//   });

//   function highlightLetterC() {
//     const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

//     while (textNodes.nextNode()) {
//       const textNode = textNodes.currentNode;
//       const text = textNode.nodeValue;
//       const newText = text.replace(/c/g, '<span style="background-color: yellow;">c</span>');
//       const newTextNode = document.createElement('span');
//       newTextNode.innerHTML = newText;
//       textNode.parentNode.replaceChild(newTextNode, textNode);
//     }
//   }
// });
