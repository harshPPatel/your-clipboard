const targetElement = document.getElementById('content');

const getClipData = () => {
  navigator.permissions.query({ name: 'clipboard-read' })
    .then(() => {
      navigator.clipboard.readText()
        .then((text) => {
          if (!text) {
            targetElement.innerHTML = 'We could not find anything in your clipboard!';
            return;
          }
          targetElement.innerHTML = text.toString().trim();
        })
        .catch((err) => {
          console.log(err);
          targetElement.innerHTML = 'Oops! Something went wrong 😔.';
        });
    })
    .catch((err) => {
      console.log(err);
      targetElement.innerHTML = 'Oops! Something went wrong 😔.';
    });
};

window.onload = () => {
  window.focus();
  getClipData();
};
