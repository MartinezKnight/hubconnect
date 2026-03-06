// HubConnect Particles Animation
// Add this script to any page to enable particle background

document.addEventListener('DOMContentLoaded', function () {
    // Create particles container if it doesn't exist
    if (!document.getElementById('particles-js')) {
        const particlesDiv = document.createElement('div');
        particlesDiv.id = 'particles-js';
        particlesDiv.style.cssText = 'position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: -1;';
        document.body.insertBefore(particlesDiv, document.body.firstChild);
    }

    // Initialize particles if library is loaded
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { 
                    value: 70, 
                    density: { enable: true, value_area: 800 } 
                },
                color: { value: '#5DBE4A' },
                shape: { type: 'circle' },
                opacity: { 
                    value: 0.25, 
                    random: true 
                },
                size: { 
                    value: 3, 
                    random: true 
                },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: '#5DBE4A', 
                    opacity: 0.15, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: 1.8, 
                    direction: 'none', 
                    random: true, 
                    out_mode: 'out' 
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { 
                    onhover: { enable: true, mode: 'grab' }, 
                    onclick: { enable: true, mode: 'push' } 
                },
                modes: { 
                    grab: { 
                        distance: 140, 
                        line_linked: { opacity: 0.4 } 
                    }, 
                    push: { particles_nb: 3 } 
                }
            },
            retina_detect: true
        });
    } else {
        console.log('Particles.js library not loaded. Skipping particle animation.');
    }
});
