// init EmailJS
(function () {
  emailjs.init("ljvafDc51_oOyjf91"); // PUBLIC KEY
})();

// submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // ✅ VALIDASI
    if (
      !form.name.value.trim() ||
      !form.email.value.trim() ||
      !form.message.value.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    // ✅ KIRIM EMAIL
    emailjs
      .sendForm(
        "service_71yica1",   // Service ID
        "template_3w0sswd",  // Template ID
        form
      )
      .then(
        function () {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("Failed to send message 😥");
          console.error("EmailJS Error:", error);
        }
      );
  });
});
