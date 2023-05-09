function onSubmit() {
    const form = document.getElementById('Newsletter');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
  
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
        console.log(jsonResponse);
        alert('Form submitted successfully!');
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to submit the form. Please try again.');
      });
  }
  
  