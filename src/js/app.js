const targetElement = document.getElementById('content');
const refreshElement = document.getElementById('refresh');

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
        .catch(() => {
          targetElement.innerHTML = 'Oops! Something went wrong 😔.';
        });
    })
    .catch(() => {
      targetElement.innerHTML = 'Oops! Something went wrong 😔.';
    });
};

refreshElement.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.reload();
});

window.onload = () => {
  window.focus();
  getClipData();
};
