import React, { createContext, useEffect, useState } from "react";
import { listAllJobs } from "../services/requests/jobs";
import useCategories from "../hooks/useCategories";
import IJob from "../interfaces/IJob";

interface JobsContextType {
	jobs: Array<IJob>;
	filteredJobs: Array<any>;
	setFilteredJobs: Function
}

const JobsContext = createContext({} as JobsContextType);

function JobsProvider({ children }) {
	const [jobs, setJobs] = useState<Array<IJob>>([]);
	const [filteredJobs, setFilteredJobs] = useState<Array<any>>([]);

	const fetchData = async () => {
		const result = await listAllJobs();
		//@ts-ignore
		setJobs(result);
	};

	useEffect(() => { fetchData(); }, []);
	
	return (
		<JobsContext.Provider 
            value={{ jobs, filteredJobs, setFilteredJobs }}
        >
            {children}
        </JobsContext.Provider>
	);
}

export { JobsContext, JobsProvider };
