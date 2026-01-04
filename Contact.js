// init EmailJS
(function () {
  emailjs.init("ljvafDc51_oOyjf91"); // publik key gw
})();

// submit handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // validasi
    if (
      !form.name.value.trim() ||
      !form.email.value.trim() ||
      !form.message.value.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    //kirim email
    emailjs
      .sendForm(
        "service_71yica1",   // service id dan templet id nya
        "template_3w0sswd",  
        form
      )
      .then(
        function () {
          alert("Message sent successfully!");
          form.reset();
        },
        function (error) {
          alert("Failed to send message !! Please try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  });
});
