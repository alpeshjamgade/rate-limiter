document.getElementById("start-button").addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("start clicked");
    try {
        const response = await fetch('/api/start', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.ok) {
            console.log("API call on start successful");
        } else {
            console.error("Error making API call on start:", response.statusText);
        }
    } catch (error) {
        console.error("Error making API call on start:", error.message);
    }
});

document.getElementById("stop-button").addEventListener("click", async (event) => {
    event.preventDefault();
    console.log("stop clicked");
    try {
        const response = await fetch('/api/stop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

        });

        if (response.ok) {
            console.log("API call on start successful");
        } else {
            console.error("Error making API call on start:", response.statusText);
        }
    } catch (error) {
        console.error("Error making API call on start:", error.message);
    }
});