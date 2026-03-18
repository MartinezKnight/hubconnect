// Mobile Menu Toggle for Dashboard Pages
// Add this script to all dashboard pages (dashboard.html, profile.html, settings.html, etc.)

document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button if on mobile
    if (window.innerWidth <= 768) {
        const topbar = document.querySelector('.topbar');
        const sidebar = document.querySelector('.sidebar');
        
        if (topbar && sidebar) {
            // Create toggle button
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'mobile-menu-toggle';
            toggleBtn.innerHTML = '☰';
            toggleBtn.onclick = function() {
                sidebar.classList.toggle('open');
                overlay.classList.toggle('active');
            };
            
            // Insert toggle button at start of topbar
            topbar.insertBefore(toggleBtn, topbar.firstChild);
            
            // Create overlay
            const overlay = document.createElement('div');
            overlay.className = 'mobile-overlay';
            overlay.onclick = function() {
                sidebar.classList.remove('open');
                overlay.classList.remove('active');
            };
            document.body.appendChild(overlay);
        }
    }
});
