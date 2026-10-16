

document.getElementById('city-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});