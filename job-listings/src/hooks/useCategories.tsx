import { useEffect, useState } from "react";

function useCategories({languages, tools, level, role}) {
    const [categoryList, setCategoryList] = useState<Array<string>>([]);

    useEffect(() => { setCategoryList(allCategories); }, []);
    
	const allCategories: any = languages?.concat(tools);
	allCategories.push(level);
	allCategories.push(role);

    const categoryDictionary = [{
        role: role,
        tools: tools,
        languages: languages,
        level: level,
        allCategories: allCategories
    }];
    
    return {categoryList, categoryDictionary};
}

export default useCategories;