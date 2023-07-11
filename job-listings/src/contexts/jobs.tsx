import React, { createContext, useEffect, useState } from "react";
import { listAllJobs } from "../services/requests/jobs";

interface Job {
	id: number;
	company: string;
	logo: string;
	new: boolean;
	featured: boolean;
	position: string;
	role: string;
	level: string;
	postedAt: string;
	contract: string;
	location: string;
	languages: Array<string>;
	tools: Array<string>;
}

interface JobsContextType {
	jobs: Array<Job>;
}

const JobsContext = createContext({} as JobsContextType);

function JobsProvider({ children }) {
	const [jobs, setJobs] = useState<Array<Job>>([]);

	const fetchData = async () => {
		const result = await listAllJobs();
		//@ts-ignore
		setJobs(result);
	};

	useEffect(() => { fetchData(); }, []);
	
	return (
		<JobsContext.Provider 
            value={{ jobs }}
        >
            {children}
        </JobsContext.Provider>
	);
}

export { JobsContext, JobsProvider };
