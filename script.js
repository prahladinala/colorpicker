var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function (e) {
  e.clearSelection();
  e.trigger.textContent = 'Copied!';
  var interval = setInterval(timer, 2000);

  function timer() {
    e.trigger.textContent = e.text;
    clearInterval(interval);
  }



});

clipboard.on('error', function (e) {
  console.info(e);
});