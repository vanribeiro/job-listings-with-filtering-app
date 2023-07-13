import api from '../api';

async function listAllJobs(): Promise<any> {
    try {
        const response: Response = await fetch(`${api}/jobs`);
        return response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function filterJobsByParams(params?: any): Promise<any> {
    const { role, q, level, position } = params;

    const joinedQueries: string = q.join('&q=');
    
    const queryRole: string = role ? `role=${role}` : '';
    const queryLevel: string = level ? `&level=${level}` : '';
    const queryPosition: string = position ? `&position=${position}` : '';
    const queryLanguagesAndTools: string = q.length > 0 ? `&q=${joinedQueries}` : '';
    try {
        const query: string = queryRole + queryLevel + queryPosition + queryLanguagesAndTools;
        const response: Response = await fetch(`${api}/jobs?${query}`);
        return response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export {
    listAllJobs,
    filterJobsByParams
}