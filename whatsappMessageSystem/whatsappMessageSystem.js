(function() {
    // Create styles
    const style = document.createElement('style');
    style.textContent = `
        .whatsapp-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background-color: #25D366;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .whatsapp-icon img {
            width: 30px;
            height: 30px;
        }
        .whatsapp-popup {
            display: none;
            position: fixed;
            bottom: 80px;
            right: 20px;
            width: 300px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            padding: 20px;
        }
        .whatsapp-popup input,
        .whatsapp-popup textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ddd;
            border-radius: 5px;
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
})();