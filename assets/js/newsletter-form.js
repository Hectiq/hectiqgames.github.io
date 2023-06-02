function onSubmit(token) {
    console.log('Form submission handler invoked');
    const form = document.getElementById('Newsletter');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // todo
    // move those notifications to another notification type ex. toastr.min.js
    if (!data.EMAIL) {
      alert('Please enter your email address.');
      return;
    }
    if (!isValidEmail(data.EMAIL)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    fetch('https://api.formcake.com/api/form/7c7c74a6-8f06-4549-b911-f12145876d41/submission', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any required headers, e.g., authentication tokens
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit the form. Please try again.');
      });
  }

  function isValidEmail(input) {
    // Regular expression pattern to match email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the input against the pattern
    var isValid = emailPattern.test(input);
    
    return isValid;
  }
  
  