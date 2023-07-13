import { useEffect, useState } from "react";

function useCategories({languages, tools, level, role, position}) {
    const [categoryList, setCategoryList] = useState<Array<string>>([]);

    
    useEffect(() => { setCategoryList(allCategories); }, []);
    
	const allCategories: any = languages?.concat(tools);
	allCategories.push(level);
	allCategories.push(role);

    const categoryDictionary = {
        role: role,
        q: allCategories,
        level: level,
        position: position
    }
    
    return {categoryList, categoryDictionary};
}

export default useCategories;