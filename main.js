const parents = document.querySelectorAll('.tab-link');

// Add the 'active' class to the first tab by default
if (parents.length > 0) {
  parents[0].classList.add('active');
}

parents.forEach(parent => {
  parent.addEventListener('click', function () {
    // Remove the active class from all parents
    parents.forEach(p => p.classList.remove('active'));

    // Add the active class to the clicked parent
    this.classList.add('active');
  });
});

const cards = document.querySelectorAll('.client_videos-card');

        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
                cards.forEach((otherCard) => {
                    if (otherCard !== card) {
                        otherCard.classList.add('client-video-ovelay');
                        otherCard.querySelector('.client_video-button-wrap').style.display = 'none';
                        otherCard.querySelector('.client-videos-author-wrap').style.display = 'none';
                    }
                });
                card.classList.add('hovered');
            });

            card.addEventListener('mouseleave', () => {
                cards.forEach((otherCard) => {
                    otherCard.classList.remove('client-video-ovelay');
                    otherCard.querySelector('.client-videos-author-wrap').style.display = 'block';
                    otherCard.querySelector('.client_video-button-wrap').style.display = 'flex';
                });
                card.classList.remove('hovered');
            });
        });


     