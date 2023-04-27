new ClipboardJS('.btn-copiar', {
    text: function(trigger) {
      return trigger.previousSibling.innerText;
    }
  });
  
  