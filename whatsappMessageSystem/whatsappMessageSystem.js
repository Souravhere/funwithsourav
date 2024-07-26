(function() {
    // Create styles
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-color: #25D366;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }
        .whatsapp-icon img {
            width: 35px;
            height: 35px;
        }
        .whatsapp-popup {
            display: none;
            position: fixed;
            bottom: 100px;
            right: 20px;
            width: 90%;
            max-width: 400px;
            background-color: #2c2c2c;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 20px;
            color: #fff;
            z-index: 1000;
        }
        .whatsapp-popup input,
        .whatsapp-popup textarea {
            width: 95%;
            padding: 10px;
            margin: 10px auto;
            border: 1px solid #555;
            border-radius: 5px;
            background-color: #444;
            color: #fff;
        }
        .whatsapp-popup button {
            width: 100%;
            padding: 10px;
            background-color: #25D366;
            border: none;
            color: #fff;
            border-radius: 5px;
            cursor: pointer;
        }
        .whatsapp-popup button:hover {
            background-color: #1ebc57;
        }
    `;
    document.head.appendChild(style);

    // Create WhatsApp icon
    const whatsappIcon = document.createElement('div');
    whatsappIcon.className = 'whatsapp-icon';
    whatsappIcon.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">';
    document.body.appendChild(whatsappIcon);

    // Create popup form
    const popup = document.createElement('div');
    popup.className = 'whatsapp-popup';
    popup.innerHTML = `
        <input type="text" id="whatsapp-name" placeholder="Name">
        <input type="email" id="whatsapp-email" placeholder="Email">
        <textarea id="whatsapp-message" placeholder="Message"></textarea>
        <button id="whatsapp-send">Send</button>
    `;
    document.body.appendChild(popup);

    // Toggle popup visibility
    whatsappIcon.addEventListener('click', () => {
        popup.style.display = popup.style.display === 'none' ? 'block' : 'none';
    });

    // Send message
    document.getElementById('whatsapp-send').addEventListener('click', () => {
        const name = document.getElementById('whatsapp-name').value;
        const email = document.getElementById('whatsapp-email').value;
        const message = document.getElementById('whatsapp-message').value;
        const whatsappNumber = 'YOUR_WHATSAPP_NUMBER'; // Replace with your WhatsApp number

        if (name && email && message) {
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
            )}`;
            window.open(whatsappUrl, '_blank');
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Hide popup when clicking outside
    document.addEventListener('click', (event) => {
        if (!popup.contains(event.target) && !whatsappIcon.contains(event.target)) {
            popup.style.display = 'none';
        }
    });
})();
