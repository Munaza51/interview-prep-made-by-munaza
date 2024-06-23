document.addEventListener("DOMContentLoaded", () => {
    const clickableElements = document.querySelectorAll('*');

    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.add('animated-click');
            element.addEventListener('animationend', () => {
                element.classList.remove('animated-click');
            }, { once: true });
        });
    });

    const commentBox = document.getElementById('commentBox');
    const submitComment = document.getElementById('submitComment');
    const commentsSection = document.getElementById('commentsSection');

    submitComment.addEventListener('click', () => {
        const commentText = commentBox.value.trim();
        if (commentText) {
            const commentDiv = document.createElement('div');
            commentDiv.textContent = commentText;
            commentsSection.appendChild(commentDiv);
            commentBox.value = '';
        }
    });

    const stars = document.querySelectorAll('.fa-star');
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            for (let i = 0; i < stars.length; i++) {
                if (i <= index) {
                    stars[i].classList.add('checked');
                } else {
                    stars[i].classList.remove('checked');
                }
            }
        });
    });
});
