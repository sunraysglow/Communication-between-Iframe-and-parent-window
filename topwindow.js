// How to display content in the UI using the javascript
document.write(`
<html><body>
<div>
<form id="myform">
<label for="message">Message</label>
<input type="text" name="message" id="message">
<br/>
<button name="send" id="send" type="submit">Send</button></form>
</div>
<br/>
<div>
<label for="response">Message from IFRAME</label>
<ul id="response">
</ul>
</div>
</body></html>`);

window.addEventListener("load", () => {
  window.addEventListener("message", (e) => window.writetoul(e.data));
  document.querySelector("#myform").addEventListener("submit", (e) => {
    //How to prevent form submit reloading the whole page ?
    e.preventDefault();
    // document
    //   .querySelector("iframe")
    //   .contentWindow.messagefromwindow("Hello from window !!");

    document
      .querySelector("iframe")
      .contentWindow.postMessage(e.target.message.value, "*");
  });
});

window.writetoul = function (msg) {
  // how to create HTML elements using javascript
  liel = document.createElement("li");
  liel.innerHTML = msg;
  //How to add HTML elements to DOM
  ulel = document.querySelector("#response");
  ulel.appendChild(liel);
};
