async function updateGraph() {
    try {
        const response = await fetch('data.json');
        const data = await response.json();

        const container = document.getElementById('graph-container');
        container.innerHTML = '';

        data.forEach(item => {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.setAttribute('data-level', item.rating);
            container.appendChild(dayElement);
        });
    } catch (error) {
        console.error('Error fetching or updating data:', error);
    }
}

// Call the function to update the graph
updateGraph();