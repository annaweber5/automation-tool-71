const axios = require('axios');

class RobloxDataHandler {
    constructor(baseApiUrl) {
        this.baseApiUrl = baseApiUrl;
    }

    async fetchGameData(gameId) {
        try {
            const response = await axios.get(`${this.baseApiUrl}/games/${gameId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching game data:', error);
            throw new Error('Failed to fetch game data');
        }
    }

    async fetchUserData(userId) {
        try {
            const response = await axios.get(`${this.baseApiUrl}/users/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw new Error('Failed to fetch user data');
        }
    }
}

module.exports = RobloxDataHandler;