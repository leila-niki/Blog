import { Link } from "react-router";

const RecentSearch = ({recentSearches}) => {
      
    return(
        <ul>
            {recentSearches?.length > 0 ? recentSearches?.map((search, i) => (
                <li key={i} className="text-blue-600">
                    <Link to={`/search?q=${search}`}>
                        {search}
                    </Link>
                </li>
            )) : (
                <li>
                    <p>هیچ جستجویی انجام نشده است.</p>
                </li>
            )}
        </ul>
    )
}

export default RecentSearch;