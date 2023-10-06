document.addEventListener('DOMContentLoaded', function () {
  const captchaForm = document.getElementById('captchaForm');
  const captchaInput = document.getElementById('captchaInput');
  const captchaContainer = document.getElementById('captchaContainer');
  let captchaCode = '';

  function generateCaptcha() {
      const charsArray = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
      const lengthOtp = 6;
      let captcha = '';

      for (let i = 0; i < lengthOtp; i++) {
          const index = Math.floor(Math.random() * charsArray.length);
          captcha += charsArray[index];
      }

      captchaCode = captcha;
      updateCaptchaDisplay(captcha);
  }

  function updateCaptchaDisplay(captcha) {
      captchaContainer.textContent = captcha;
  }

  function validateCaptcha() {
      event.preventDefault();

      if (captchaInput.value === captchaCode) {
          alert('Valid Captcha');
          captchaInput.value = '';
          generateCaptcha(); // Generate a new CAPTCHA
      } else {
          alert('Invalid Captcha. Try Again');
          captchaInput.value = '';
          generateCaptcha(); // Generate a new CAPTCHA
      }
  }

  generateCaptcha(); // Initial CAPTCHA generation
  captchaForm.addEventListener('submit', validateCaptcha);
});
