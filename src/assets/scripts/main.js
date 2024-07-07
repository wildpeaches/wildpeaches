/* eslint-disable no-undef */

/* SERVICE WORKER */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register('/service-worker.js').catch((error) => {
    console.error('Failure!', error);
  });
}

/* SUBSCRIPTION FORM */
const processForm = (form) => {
  const data = new FormData(form);
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
    .then(() => {
      form.innerHTML = `<div class="form--success px-2 py-4 text-center">Almost there!<br/> Check your inbox for a confirmation e-mail.</div>`;
    })
    .catch((error) => {
      form.innerHTML = `<div class="form--error px-2 py-4 text-center">Error: ${error}</div>`;
    });
};

const emailForm = document.querySelector('.email-form');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    processForm(emailForm);
  });
}
