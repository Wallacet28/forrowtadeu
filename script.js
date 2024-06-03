document.getElementById('historia-link').addEventListener('click', function(event) {
    event.preventDefault();
    const historiaContent = document.getElementById('historia-content');
    if (historiaContent.classList.contains('hidden')) {
        historiaContent.classList.remove('hidden');
    } else {
        historiaContent.classList.add('hidden');
    }
});

document.getElementById('lead-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado por se inscrever! Em breve entraremos em contato.');
    this.reset();
});
