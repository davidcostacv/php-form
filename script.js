document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (event) {
      event.preventDefault();

      // Perform client-side validation here if needed

      // Submit the form using AJAX
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();

      xhr.open('POST', form.action, true);
      xhr.onload = function () {
          if (xhr.status === 200) {
              // Handle successful form submission
              console.log(xhr.responseText);
          } else {
              // Handle error
              console.error(xhr.statusText);
          }
      };

      xhr.onerror = function () {
          console.error('Request failed');
      };

      xhr.send(formData);
  });
});
