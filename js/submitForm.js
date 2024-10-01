document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const textValue = document.getElementById('text').value;
      const emailValue = document.getElementById('email')?.value;
  
      const formData = {
        text: textValue,
        email: emailValue,
      };
  
      console.log('Dados coletados', formData);
  
      const response = await fetch('https://minhasAPI.com/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    });
  });
  