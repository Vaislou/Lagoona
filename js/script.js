const elements = document.querySelectorAll('select');
const choices = elements.forEach(function(e) {
    new Choices(e, {
        itemSelectText: '',
        searchEnabled: false
    });
}) 