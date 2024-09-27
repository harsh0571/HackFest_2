// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize the interactive map
    function initMap() {
        // This is where you would typically initialize a map library
        const mapElement = document.getElementById('interactive-map');
        if (mapElement) {
            mapElement.textContent = 'Interactive Map Coming Soon!';
            mapElement.style.display = 'flex';
            mapElement.style.justifyContent = 'center';
            mapElement.style.alignItems = 'center';
            mapElement.style.fontSize = '24px';
            mapElement.style.fontWeight = 'bold';
        } else {
            console.error('Map element not found!');
        }
    }

    // Initialize the map
    initMap();

    // Example of adding interactivity to beach categories
    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });

    // Virtual Assistant
    const openAssistantBtn = document.getElementById('open-assistant');
    const closeAssistantBtn = document.getElementById('close-assistant');
    const virtualAssistant = document.getElementById('virtual-assistant');
    const chatMessages = document.getElementById('chat-messages');
    const userMessageInput = document.getElementById('user-message');
    const sendMessageBtn = document.getElementById('send-message');

    const beachInfo = {
        goa: "Goa is famous for its beautiful beaches! Popular ones include Baga Beach (great for water sports), Calangute Beach (the 'Queen of Beaches'), and Palolem Beach (known for its scenic beauty).",
        kerala: "Kerala has serene beaches like Varkala Beach (cliff-side with stunning views), Kovalam Beach (great for Ayurvedic treatments), and Marari Beach (quiet and less crowded).",
        andaman: "The Andaman Islands have pristine beaches. Radhanagar Beach on Havelock Island is often rated as one of the best in Asia. Elephant Beach is great for snorkeling and water sports.",
        maharashtra: "Maharashtra's Konkan coast offers beautiful beaches like Alibaug, Ganpatipule, and Tarkarli. These beaches are known for their clean sands and peaceful atmosphere.",
        tamil_nadu: "Tamil Nadu has some lovely beaches, including Marina Beach in Chennai (one of the longest urban beaches in the world) and Mahabalipuram Beach (with ancient temples nearby)."
    };

    openAssistantBtn.addEventListener('click', () => {
        virtualAssistant.style.display = 'flex';
        openAssistantBtn.style.display = 'none';
        addMessage("Hi there! I'm Beach Buddy. I can suggest popular beaches in India. What kind of beach experience are you looking for?", 'assistant');
    });

    closeAssistantBtn.addEventListener('click', () => {
        virtualAssistant.style.display = 'none';
        openAssistantBtn.style.display = 'block';
    });

    sendMessageBtn.addEventListener('click', sendMessage);
    userMessageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = userMessageInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            userMessageInput.value = '';
            const response = getResponse(message);
            setTimeout(() => {
                addMessage(response, 'assistant');
            }, 500);
        }
    }

    function addMessage(message, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('popular') || lowerMessage.includes('best')) {
            return "Some of the most popular beaches in India include Baga and Calangute in Goa, Radhanagar Beach in Andaman, Varkala Beach in Kerala, and Marina Beach in Chennai. Which region are you most interested in?";
        } else if (lowerMessage.includes('goa')) {
            return beachInfo.goa;
        } else if (lowerMessage.includes('kerala')) {
            return beachInfo.kerala;
        } else if (lowerMessage.includes('andaman')) {
            return beachInfo.andaman;
        } else if (lowerMessage.includes('maharashtra')) {
            return beachInfo.maharashtra;
        } else if (lowerMessage.includes('tamil nadu')) {
            return beachInfo.tamil_nadu;
        } else if (lowerMessage.includes('party') || lowerMessage.includes('nightlife')) {
            return "For beaches with great nightlife, Goa is your best bet! Baga and Calangute beaches are known for their vibrant party scene. Anjuna Beach is famous for its trance parties.";
        } else if (lowerMessage.includes('quiet') || lowerMessage.includes('peaceful')) {
            return "For a quiet beach experience, consider Marari Beach in Kerala, Agonda Beach in Goa, or Radhanagar Beach in Andaman. These beaches are less crowded and offer a more serene environment.";
        } else if (lowerMessage.includes('water sports') || lowerMessage.includes('adventure')) {
            return "For water sports and adventure, check out Baga Beach in Goa (parasailing, jet-skiing), Kovalam Beach in Kerala (surfing, paragliding), or Elephant Beach in Andaman (snorkeling, sea walking).";
        } else {
            return "I'm here to help you discover popular beaches in India. Feel free to ask about specific regions like Goa, Kerala, or Andaman, or tell me what kind of beach experience you're looking for - party beaches, quiet retreats, or adventure spots!";
        }
    }

    // You can add more JavaScript functionality here
});
