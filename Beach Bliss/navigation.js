document.addEventListener('DOMContentLoaded', function() {
    const navContainer = document.getElementById('dynamic-nav');
    if (navContainer) {
        const navHTML = `
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="goa-beaches.html">Goa Beaches</a></li>
                    <li><a href="kerala-beaches.html">Kerala Beaches</a></li>
                    <li><a href="andaman-beaches.html">Andaman Beaches</a></li>
                    <li><a href="maharashtra-beaches.html">Maharashtra Beaches</a></li>
                    <li><a href="tamil-nadu-beaches.html">Tamil Nadu Beaches</a></li>
                </ul>
            </nav>
        `;
        navContainer.innerHTML = navHTML;

        // Highlight current page in navigation
        const currentPage = window.location.pathname.split('/').pop();
        const currentLink = navContainer.querySelector(`a[href="${currentPage}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }
});
