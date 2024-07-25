
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function(item) {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        answer.style.display = 'none';

        question.addEventListener('click', function() {
            if (answer.style.display === "none") {
                answer.style.display = "block";
 
                answer.offsetHeight;
                answer.classList.add('show');
            } else {
                answer.classList.remove('show');
                answer.addEventListener('transitionend', function() {
                    answer.style.display = "none";
                }, { once: true });
            }
        });
    });
});