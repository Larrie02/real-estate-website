const form = document.querySelector(".contact-form");

form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            "Accept": "application/json"
        }
    });

    if (response.ok) {
        alert("Your message has been sent successfully!");
        form.reset();
    } else {
        alert("Something went wrong. Please try again.");
    }
});