const axios = require('axios');

const BASE_URL = 'https://api.roblox.com';

const fetchRobloxData = async (endpoint) => {
    try {
        const response = await axios.get(`${BASE_URL}${endpoint}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Roblox:', error);
        throw new Error('Failed to fetch data');
    }
};

const formatRobloxUserData = (data) => {
    return {
        id: data.Id,
        username: data.Username,
        displayName: data.DisplayName,
        avatarUrl: data.AvatarUrl
    };
};

const isValidUserId = (userId) => {
    return typeof userId === 'number' && userId > 0;
};

module.exports = { fetchRobloxData, formatRobloxUserData, isValidUserId };