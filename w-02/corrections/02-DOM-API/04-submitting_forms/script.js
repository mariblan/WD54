// You can work here or download the template
// 1. Add an event listener to handle form submission.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const output = document.getElementById('output');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (name === '' || email === '' || message === '') {
        output.textContent = 'All fields are required!';
        output.className = 'mt-4 p-4 bg-red-500 text-white rounded shadow-md max-w-md w-full';
        return;
      }

      console.log({ name, email, message });

      output.innerHTML = `
            <ul class="list-disc pl-5">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Message:</strong> ${message}</li>
            </ul>
          `;
          output.className = 'mt-4 p-4 bg-green-500 text-white rounded shadow-md max-w-md w-full';

          form.reset();
        });
      });

// 2. Validate that all fields are not empty.
// 2.1. If validation passes, output the form data to the console and display it in the p element as a list (ul)
// 2.2. If not output an error message in the p element, style it as an error. Maybe something red and flashy?
// 2.3. Make sure to toggle the error and success styles! 
// 2.4. Clear the form fields