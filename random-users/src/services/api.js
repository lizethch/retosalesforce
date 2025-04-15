export const fetchRandomUsers = async (count = 10) => {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching random users:', error);
        throw error; // Re-throw to handle in component
    }
};