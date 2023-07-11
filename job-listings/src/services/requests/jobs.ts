import api from '../api';

async function listAllJobs() {
    try {
        const response = await fetch(`${api}/jobs`);
        return response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
}

export {
    listAllJobs
}