const axios = require('axios');
const { credV } = require('./config');
const getToken = async () => {
    try {
        const response = await axios.post("http://20.244.56.144/test/auth", credV);
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching token:', error.message || error);
        throw error;
    }
};

module.exports = { getToken };
