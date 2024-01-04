document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myForm");

    // Function for handle submit action
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Variable to get value from field of HTML
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const errorMessage = document.getElementById("errorMessage");

        // Reset previous error styles
        form.classList.remove("shake");
        errorMessage.style.display = "none";

        // Empty fields validation
        if (isEmpty(name) || isEmpty(email) || isEmpty(phone)) {
            showErrorMessage("Semua kolom harus diisi!");
            return;
        }

        // Regex of email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Email validation
        if (!emailRegex.test(email)) {
            showErrorMessage("Email tidak valid!");
            return;
        }

        // Function show error from validation
        function showErrorMessage(message) {
            errorMessage.innerHTML = message;
            errorMessage.style.display = "block";
            form.classList.add("shake");
        }

        // Function of checking empty fields
        function isEmpty(value) {
            return value.trim() === "";
        }


        // Data to be sent to the server
        var formData = {
            nama: name,
            email: email,
            no_telpon: phone
        };

        // Fetch API to send data
        fetch('http://localhost:8003', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response from the server, you can display a success message or handle errors
                alert('Data telah sukses terkirim ke sistem kami');

                // Reset the form
                document.getElementById('myForm').reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Terjadi kesalahan, coba lagi nanti');
            });
    });
});