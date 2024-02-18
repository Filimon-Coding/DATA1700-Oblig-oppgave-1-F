// Array for all the incoming tickets
let tickets = [];

// Function to check input validity before proceeding
function validateInput() {
    const movieSelect = document.getElementById("movieNames");
    const quantityInput = document.getElementById("quantity");
    const firstNameInput = document.getElementById("firstName");
    const lastNameInput = document.getElementById("lastName");
    const phoneInput = document.getElementById("phoneNumber");
    const emailInput = document.getElementById("email");

    // Validation for film selection
    if (movieSelect.value === "") {
        displayError("movieAdv", "Please select a movie.");
        return false;
    }

    // Validation for ticket quantity
    if (quantityInput.value === "" || quantityInput.value < 1) {
        displayError("quantityAdv", "Please enter a valid quantity.");
        return false;
    }

    // Validation for first name
    if (firstNameInput.value === "") {
        displayError("firstNameAdv", "Please enter your first name.");
        return false;
    }

    // Validation for last name
    if (lastNameInput.value === "") {
        displayError("lastNameAdv", "Please enter your last name.");
        return false;
    }

    // Validation for phone number
    const phoneRegex = /^\d{8}$/;
    if (!phoneRegex.test(phoneInput.value)) {
        displayError("phoneAdv", "Please enter a valid 8-digit phone number.");
        return false;
    }

    // Validation for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        displayError("emailAdv", "Please enter a valid email address.");
        return false;
    }

    hideValidationErrors();
    return true;
}

// Function to display error messages
function displayError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.color = "red";
}

// Function to reset the form
function resetForm() {
    document.getElementById("ticketForm").reset();
    hideValidationErrors();
}

// Function to hide any validation error messages
function hideValidationErrors() {
    const validationErrors = document.querySelectorAll(".validation-error");
    validationErrors.forEach(error => {
        error.innerText = "";
        error.style.color = ""; // Reset text color
    });
}

// Function to add the ticket to the list
function addTicket() {
    if (validateInput()) {
        const movieSelect = document.getElementById("movieNames");
        const quantityInput = document.getElementById("quantity");
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const phoneInput = document.getElementById("phoneNumber");
        const emailInput = document.getElementById("email");

        const ticket = {
            movie: movieSelect.value,
            quantity: quantityInput.value,
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            phone: phoneInput.value,
            email: emailInput.value
        };

        tickets.push(ticket);
        displayTickets();
        resetForm();
    }
}

// Function to display the list of tickets
function displayTickets() {
    const ticketsContainer = document.getElementById("allTickets");
    ticketsContainer.innerHTML = "";

    tickets.forEach((ticket, index) => {
        const ticketInfo = document.createElement("p");
        ticketInfo.innerText = `Ticket ${index + 1}: ${ticket.movie} - ${ticket.quantity} tickets - ${ticket.firstName} ${ticket.lastName} - ${ticket.phone} - ${ticket.email}`;
        ticketsContainer.appendChild(ticketInfo);
    });
}

// Function to delete all tickets
function deleteAllTickets() {
    tickets = [];
    displayTickets();
}
