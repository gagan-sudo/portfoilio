const toggleButton = document.getElementById("navbar-toggle");
const menu = document.getElementById("navbar-menu");
toggleButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous errors
  document.getElementById('name-error').classList.add('hidden');
  document.getElementById('email-error').classList.add('hidden');
  document.getElementById('message-error').classList.add('hidden');

  let isValid = true;

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate name
  if (!name) {
      document.getElementById('name-error').classList.remove('hidden');
      isValid = false;
  }

  // Validate email
  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!email ) {
      document.getElementById('email-error').classList.remove('hidden');

      isValid = false;
  }
  if(email && emailPattern.test(email)){
    document.getElementById('email-validation-error').classList.remove('hidden');

    isValid = false;
  }

  // Validate message
  if (!message) {
      document.getElementById('message-error').classList.remove('hidden');
      isValid = false;
  }

  // Submit form if valid
  if (isValid) {
      alert('Form submitted successfully!');
      // Here you can handle the actual form submission logic, e.g., using fetch or Axios.
      // fetch('/api/contact', { method: 'POST', body: new FormData(this) });
  }
});


function sendEmail() {
  const recipient = "gaganbhangu00011@gmail.com";
  // Replace with recipient's email address
  const subject = "Hello Gagan";
  const body = "Hi there, I wanted to get in touch with you regarding...";
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
      alert("Email submitted: " + email);
      // Here you can handle the form submission, e.g., send the email to a server
    } else {
      alert("Please enter a valid email address.");
    }
  });
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i
  return re.test(String(email).toLowerCase());
}


    function sendEmailToServer(email) {
      fetch('https://your-server-endpoint.com/send-email', { // Replace with your server endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      })
      .then(response => response.json())
      .then(data => {
        alert('Email submitted successfully: ' + data.message);
      })
      .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your email.');
      });
    }

