import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from '../../../Redux/store';
import { fetchNews } from "../../../services/NewsListing";
import { SelectChangeEvent } from '@mui/material/Select';


interface News {

    urlToImage: string,
    title: string,
    description: string,
    fav: boolean,
    source: { id: string },
    url: string

}
let endPoints = [
    { title: "Top headlines", value: "top-headlines" },
    { title: "All", value: "everything" }
];
const useFetchNews = () => {

    const [data, setData] = useState<News[]>([]);
    const [endPoint, setEndPoint] = useState<string>("top-headlines");
    const profileData = useSelector((state: RootState) => state.user);
    const searchTerm = useSelector((state: RootState) => state.search.value);
    const [isLoading, setIsLoading] = useState<boolean>(false);


    useEffect(() => {

        getNews(endPoint);

    }, [endPoint]);


    const getNews = async (category:string) => {

      
        
        let queryParams = category === "top-headlines" ? { country: "in" } :
            { q: "sports AND business AND entertainment AND technology AND health" }

        try {
            setIsLoading(true);
            let response = await fetchNews(category, queryParams);
            setIsLoading(false);
            let newsList = response.data.articles;

            let storedNewsList = localStorage.getItem("favList_" + profileData?.email);

            let myNewsList: News[] = [];
            if (storedNewsList) {
                myNewsList = JSON.parse(storedNewsList);
            }

            let formattedNewsList = newsList.map((eachNews: News) => {

                let hasArticle = myNewsList?.length > 0 ?
                    myNewsList.find((eachArticle) => eachArticle.title === eachNews.title) :
                    null;
                if (hasArticle) {
                    return {
                        ...eachNews,
                        fav: hasArticle.fav
                    }
                }

                return {
                    ...eachNews,
                    fav: false
                }

            })

            setData(formattedNewsList);
        } catch (error) {
            setIsLoading(false);
        }
    }

    const handleClickReadMore = (news: News) => {
        window.open(news.url)
    }


    const filteredNews = Array.isArray(data) ? data.filter((eachNews: News) => {

        if (searchTerm===""){
            return eachNews;
        } 
        else if (eachNews.title.toLowerCase().includes(searchTerm?.toLowerCase())) {
            return eachNews
        }

    }) : []

    const handleClickFav = (news: News) => {

        let fav = news.fav ? false : true;
        let storedNewsList = localStorage.getItem("favList_" + profileData.email);
        let myNewsList = storedNewsList ? JSON.parse(storedNewsList) : [];

        if (fav) {
            myNewsList.push({ ...news, fav });
        } else {
            myNewsList = myNewsList.filter((eachNews: News) => {
                return eachNews.title !== news.title
            })
        }

        const updatedNewsList = data.map((eachNews: News) => {

            if (news.title === eachNews.title) {
                return {
                    ...eachNews,
                    fav
                }
            }

            return eachNews
        });


        localStorage.setItem("favList_" + profileData.email,
            JSON.stringify(myNewsList));
        setData(updatedNewsList)

    }


    const handleChangeEndePoint = (event: SelectChangeEvent) => {
        setEndPoint(event.target.value as string);
        
    };
   

    return {
        filteredNews,
        handleClickReadMore,
        handleClickFav,
        handleChangeEndePoint,
        endPoints,
        endPoint,
        isLoading
    }
}

export default useFetchNews