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

