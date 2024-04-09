async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        if (!response.ok) {
            throw new Error('Failed to fetch advice');
        }
        const data = await response.json();
        return { id: data.slip.id, advice: `"${data.slip.advice}"`}
    } catch (error) {
        console.error ('Error fetching advice: ', error)
        return null
    }
}

export{ fetchAdvice }