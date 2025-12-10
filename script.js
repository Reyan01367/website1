// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Color Analysis Quiz Logic
const quizData = {
    currentQuestion: 1,
    answers: {
        spring: 0,
        summer: 0,
        autumn: 0,
        winter: 0
    },
    results: {
        spring: {
            title: "You're a Spring!",
            description: "Your warm, light, and bright coloring is perfectly complemented by Spring colors. Think coral, peach, golden yellow, and fresh greens. Gold and rose gold jewelry will enhance your natural warmth beautifully."
        },
        summer: {
            title: "You're a Summer!",
            description: "Your cool, soft, and muted coloring shines with Summer colors. Think soft blues, lavenders, powder pinks, and light grays. Silver and platinum jewelry will complement your cool undertones perfectly."
        },
        autumn: {
            title: "You're an Autumn!",
            description: "Your warm, rich, and earthy coloring is enhanced by Autumn colors. Think rust, amber, golden brown, and deep oranges. Gold, rose gold, and copper jewelry will bring out your natural warmth."
        },
        winter: {
            title: "You're a Winter!",
            description: "Your cool, clear, and vivid coloring creates striking looks with Winter colors. Think deep navy, crisp white, jewel tones, and true black. Silver, platinum, and white gold jewelry will enhance your natural contrast."
        }
    }
};

// Initialize quiz if on guide page
if (document.getElementById('quizContainer')) {
    const optionButtons = document.querySelectorAll('.option-btn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const resultSection = document.getElementById('resultSection');
    const resultTitle = document.getElementById('resultTitle');
    const resultDescription = document.getElementById('resultDescription');

    let currentQuestionNum = 1;
    const totalQuestions = 4;

    // Add click handlers to option buttons
    optionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove selected class from all buttons in current question
            const currentQuestion = this.closest('.question');
            currentQuestion.querySelectorAll('.option-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Add selected class to clicked button
            this.classList.add('selected');
            
            // Update answers based on selected value
            const season = this.getAttribute('data-value');
            quizData.answers[season]++;
            
            // Show next/submit button
            if (currentQuestionNum < totalQuestions) {
                nextBtn.style.display = 'inline-block';
            } else {
                submitBtn.style.display = 'inline-block';
            }
        });
    });

    // Next button handler
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Hide current question
            document.getElementById(`question${currentQuestionNum}`).style.display = 'none';
            nextBtn.style.display = 'none';
            
            // Show next question
            currentQuestionNum++;
            if (currentQuestionNum <= totalQuestions) {
                document.getElementById(`question${currentQuestionNum}`).style.display = 'block';
            }
        });
    }

    // Submit button handler
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            // Calculate result
            let maxScore = 0;
            let resultSeason = 'spring';
            
            for (const [season, score] of Object.entries(quizData.answers)) {
                if (score > maxScore) {
                    maxScore = score;
                    resultSeason = season;
                }
            }
            
            // Show result
            const result = quizData.results[resultSeason];
            resultTitle.textContent = result.title;
            resultDescription.textContent = result.description;
            resultSection.classList.add('active');
            
            // Scroll to result
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Hide quiz container
            document.getElementById('quizContainer').style.display = 'none';
        });
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .palette-card, .example-card, .glossary-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Color circle animation enhancement
const colorCircles = document.querySelectorAll('.color-circle');
colorCircles.forEach((circle, index) => {
    circle.style.animationDelay = `${index * 1.5}s`;
});


