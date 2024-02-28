import axios from "axios";
import { useInfiniteQuery } from "react-query";

interface Category {
    storeID?: string,
    sortBy?: string,
    lowerPrice?: string,
    upperPrice?: string,
    AAA?: string,
    title?: string,
    desc?: string,
    exact?: string,
    metacritic?: string,
    steamRating?: string,
}

export const getGameList = async (pageNumber: number, category: Category) =>
    await axios.get(`https://www.cheapshark.com/api/1.0/deals?`, {
        params: {
            ...category,
            pageNumber: pageNumber,
        },
    })

const useGetGameList = (category: Category) => {
    const filteredCategory = Object.fromEntries(
        Object.entries(category).filter(([key, value]) => value !== "")
    );

    const queryFn = async (pageNumber: number) => {
        const response = await getGameList(pageNumber, filteredCategory)
        const data = response
        return { data, pageNumber: pageNumber }
    }

    return useInfiniteQuery('GameList', ({ pageParam = 0 }) => queryFn(pageParam), {
        getNextPageParam: (lastPage) => lastPage.pageNumber + 1 || undefined
    })
}


export default useGetGameList