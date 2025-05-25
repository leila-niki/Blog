import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Input from "../input/Input";
import RecentSearch from "../recentSearch/RecentSearch";

const QueryInput = () => {
    const [query, setQuery] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [recentSearches, setRecentSearches] = useState(JSON.parse(localStorage.getItem("query")) || []);
    const navigate = useNavigate();

    const saveToLocalStorage = (query) => {
        const queryArr = [];
        if(localStorage.getItem("query") !== null){
            if(JSON.parse(localStorage.getItem("query"))?.length === 5){
                const oldQuery = JSON.parse(localStorage.getItem("query"));
                oldQuery.shift();
                localStorage.setItem("query", JSON.stringify(oldQuery));
            }
            queryArr.push(...JSON.parse(localStorage.getItem("query")), query);
        }else{
            queryArr.push(query);
        }
        localStorage.setItem("query", JSON.stringify(queryArr));
        setRecentSearches(queryArr);
    };

    useEffect(() => {
        if (searchParams.get("q") && !JSON.parse(localStorage.getItem("query")).includes(searchParams.get("q"))) {
          saveToLocalStorage(searchParams.get("q"));
          setRecentSearches(JSON.parse(localStorage.getItem("query")));
        }
      }, [searchParams.get("q")]);
    
    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            saveToLocalStorage(query?.trim());
            navigate(`/search?q=${query}`, {
                state: {
                    query: query?.trim()
                }
            });
            setQuery("")
        }
    }

    const handleChange = (e) =>{
        const {value} = e.target;
        setQuery(value?.trim());
    };


    return(
        <>
            <Input
                className="w-full my-2" 
                value={query} 
                placeholder="جستجو در پست ها"
                onChange={handleChange} 
                onKeyDown={handleKeyDown}
            />
            <RecentSearch recentSearches={recentSearches}/>
        </>
    )
}

export default QueryInput;