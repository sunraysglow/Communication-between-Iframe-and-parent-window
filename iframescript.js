document.write(`<html><body><div id='myframe'>
 IFRAME
</div></body></html>`);

window.addEventListener("load", (e) => {
  window.addEventListener("message", (emessage) => {
    if (emessage.origin == "http://127.0.0.1:8080")
      window.messagefromwindow(emessage.data);
    //How to send message back to sender
    emessage.source.postMessage("Hello back !!", emessage.origin);
  });
});

//function withour var/let/const will be added where ? -> it will be added to window scope , global scope
window.messagefromwindow = function (msg) {
  let divP = document.querySelector("div");
  divP.innerHTML = `<html><body><div id='myframe'>${
    msg && msg != "" ? msg : "Here is a placeholder message"
  }</div></body></html>`;
};
