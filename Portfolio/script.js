document.addEventListener('DOMContentLoaded', () => {
    const navButton = document.querySelector('.nav-button');
    const navBar = document.querySelector('#navBar');

    // Function to show navbar and hide button
    function showNavBar() {
        navBar.classList.add('active');
        navButton.style.opacity = '0';
        navButton.style.pointerEvents = 'none';
    }

    // Function to hide navbar and show button
    function hideNavBar() {
        navBar.classList.remove('active');
        navButton.style.opacity = '1';
        navButton.style.pointerEvents = 'auto';
    }

    // Make toggleNavBar function globally accessible
    window.toggleNavBar = () => {
        if (navBar.classList.contains('active')) {
            hideNavBar();
        } else {
            showNavBar();
        }
    };

    // Click handler for the explore button
    navButton.addEventListener('click', showNavBar);

    // Event listeners
    document.querySelector('.close-modal').addEventListener('click', closeModal);
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));

    // Close modal when clicking outside
    document.getElementById('projectModal').addEventListener('click', (e) => {
        if (e.target.id === 'projectModal') closeModal();
    });
});


class Typewriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = wait;
        this.type();
        this.isDeleting = false;
    }

    type() {
        // Current word index
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
            // Remove char
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            // Add char
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.element.textContent = this.txt;

        // Initial typing speed
        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2; // Faster deletion
        }

        // Check if word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
            // Pause at end
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            // Move to next word
            this.wordIndex++;
            // Pause before typing
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const element = document.querySelector('#typewriter-text');
    const words = [
        'a Passionate Web Developer',
        'an Aspiring Fullstack Developer',
        'Learning Cloud based MERN+MEAN stack with AI/ML integration'
        // Add your own words here
    ];
    
    new Typewriter(element, words);
}

// Add cursor movement effect
document.addEventListener('mousemove', (e) => {
    const icons = document.querySelectorAll('.animated-icon');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    icons.forEach((icon) => {
        const iconRect = icon.getBoundingClientRect();
        const iconX = iconRect.left + iconRect.width / 2;
        const iconY = iconRect.top + iconRect.height / 2;

        // Calculate distance between cursor and icon
        const distX = mouseX - iconX;
        const distY = mouseY - iconY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        // Maximum distance for effect (in pixels)
        const maxDistance = 200;
        
        if (distance < maxDistance) {
            // Calculate movement intensity based on distance
            const intensity = (maxDistance - distance) / maxDistance;
            
            // Move icon away from cursor
            const moveX = (distX / distance) * -15 * intensity;
            const moveY = (distY / distance) * -15 * intensity;
            
            icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            icon.style.transform = 'translate(0, 0)';
        }
    });
});

// Project data
const projects = [
    {
        title: "Museum Ticket Booking Chatbot",
        description: "A chatbot-based ticket booking system for museums that streamlines the booking process and provides instant assistance to visitors. The system handles ticket reservations, provides museum information, and manages visitor queries efficiently using natural language processing.",
        images: ["./assets/Screenshot (44).png","./assets/Screenshot (45).png", "./assets/Screenshot (46).png", "./assets/Screenshot (47).png", "./assets/Screenshot (49).png","./assets/Screenshot (48).png"],
        tech: ["React+Vite", "Python", "CSS", "Node.js", "JSON", "MongoDB"],
        github: "https://github.com/indranilsaha2003/TIXIE_CHATBOT",
        live: "#"
    },
    {
        title: "Timetable Generator",
        description: "An automated timetable generation system that creates optimal schedules for educational institutions. The system considers various constraints like teacher availability, room allocation, and subject requirements to generate conflict-free timetables. Features include drag-and-drop interface and real-time updates.",
        images: ["./assets/Screenshot (50).png","./assets/Screenshot (51).png","./assets/Screenshot (52).png","./assets/Screenshot (53).png","./assets/Screenshot (54).png","./assets/Screenshot (55).png"],
        tech: ["React+Vite", "Typescript", "Node.js", "SQL", "Tailwind CSS", "JSON"],
        github: "https://github.com/indranilsaha2003/Innovathon",
        live: "#"
    },
    {
        title: "Travel & Tourism Website",
        description: "A comprehensive travel and tourism website that helps users discover destinations, plan trips, and book travel services. Features include destination guides, booking systems, interactive maps, and user reviews. The site provides a seamless experience for travel planning.",
        images: ["./assets/Screenshot (56).png","./assets/Screenshot (57).png","./assets/Screenshot (58).png","./assets/Screenshot (59).png","./assets/Screenshot (60).png"],
        tech: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/indranilsaha2003/VoyageVers-deploy",
        live: "https://voyage-vers-deploy.vercel.app/"
    },
    {
        title: "Calculator",
        description: "A basic calculator application that performs fundamental arithmetic operations. This project aims to create an easy-to-use calculator with a clean interface and reliable functionality for everyday calculations.",
        images: ["./assets/Screenshot (61).png","./assets/Screenshot (62).png","./assets/Screenshot (63).png","./assets/Screenshot (64).png","./assets/Screenshot (66).png"],
        tech: ["HTML", "CSS", "Javascript"],
        github: "#",
        live: "#"
    },
    {
        title: "Shopping Cart Functionality",
        description: "A fully functional e-commerce shopping cart implementation with features like product listing, cart management, quantity updates, and checkout process. Includes real-time price calculations, order summary, and a responsive design for mobile users.",
        images: ["./assets/Screenshot (67).png","./assets/Screenshot (68).png","./assets/Screenshot (69).png","./assets/Screenshot (70).png","./assets/Screenshot (71).png"],
        tech: ["HTML", "CSS", "Javascript"],
        github: "#",
        live: "#"
    },
    {
        title: "Portfolio Builder",
        description: "A resume-building web application with a user-friendly interface that lets users create, manage, and export ATS-friendly resumes. Features include secure authentication using JWT (JSON Web Tokens), real-time previews, PDF export, cloud sync, and offline support using modern web technologies",
        images: [
            "./assets/Screenshot 2025-07-10 025822.png",
            "./assets/Screenshot 2025-07-10 025904.png",
            "./assets/Screenshot 2025-07-10 025926.png",
            "./assets/Screenshot 2025-07-10 030019.png",
            "./assets/Screenshot 2025-07-10 030625.png",
            "./assets/Screenshot 2025-07-10 030750.png",
            "./assets/Screenshot 2025-07-10 030831.png",
            "./assets/Screenshot 2025-07-10 030909.png",
            "./assets/Screenshot 2025-07-10 031010.png",
            "./assets/Screenshot 2025-07-10 031408.png"
        ],
        tech: ["React+Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "jsPDF"],
        github: "https://github.com/indranilsaha2003/Portfolio_Builder",
        live: "https://portfolio-builder-ykd1.vercel.app/"
    },
];

// Modal and slider functionality
let currentProject = 0;
let currentSlide = 0;

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    // Close button click handler
    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    // Slider buttons click handlers
    prevBtn.addEventListener('click', () => changeSlide(-1));
    nextBtn.addEventListener('click', () => changeSlide(1));

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
});

function openProjectModal(projectIndex) {
    currentProject = projectIndex;
    currentSlide = 0;
    const modal = document.getElementById('projectModal');
    const project = projects[projectIndex];

    // Update modal content
    document.querySelector('.modal-title').textContent = project.title;
    document.querySelector('.modal-description').textContent = project.description;
    
    // Update tech stack
    const techContainer = document.querySelector('.modal-tech');
    techContainer.innerHTML = project.tech.map(tech => `<span>${tech}</span>`).join('');
    
    // Update slider
    const slider = document.querySelector('.slider');
    slider.innerHTML = project.images.map(img => `<img src="${img}" alt="Project screenshot">`).join('');
    slider.style.transform = 'translateX(0)';

    // Update links
    const linksContainer = document.querySelector('.modal-links');
    linksContainer.innerHTML = `
        <a href="${project.github}" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
            GitHub
        </a>
        <a href="${project.live}" target="_blank">
            <ion-icon name="open-outline"></ion-icon>
            Live Demo
        </a>
    `;

    // Show modal with animation
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('show');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300); // Match this with CSS transition duration
}

function changeSlide(direction) {
    const slider = document.querySelector('.slider');
    const project = projects[currentProject];
    currentSlide = (currentSlide + direction + project.images.length) % project.images.length;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
