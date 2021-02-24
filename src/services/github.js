import axios from 'axios';

export default {
    GetZen: async function() {
        console.log(`GetZen github service`);
        return axios.get(`https://api.github.com/zen`)
    }
}