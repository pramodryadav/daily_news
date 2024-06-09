import { useEffect, useState } from "react";

interface News {

    urlToImage: string,
    title: string,
    description: string,
    fav: boolean,
    source: { id: string },
    url: string

}

const useFav = () => {

    const [favList, setFavList] = useState<News[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const userData = localStorage.getItem("userData");
    const profileData = userData ? JSON.parse(userData) : "";



    useEffect(() => {

        const storedNewsList = localStorage.getItem("favList_" + profileData.email);
        const newsList = storedNewsList ? JSON.parse(storedNewsList) : "";
        setFavList(newsList);

    }, []);


    const handleClickReadMore = (news: News) => {
        window.open(news.url)
    }


    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    const filteredNews = favList.filter((eachNews: News) => {

        if (eachNews.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return eachNews
        }
        return eachNews;
    })

    const handleClickFav = (news: News) => {

        let storedNewsList = localStorage.getItem("favList_" + profileData.email);
        let myNewsList = storedNewsList ? JSON.parse(storedNewsList) : [];

       
            myNewsList = myNewsList.filter((eachNews: News) => {
                return eachNews.title !== news.title
            })
        

        localStorage.setItem("favList_" + profileData.email,
            JSON.stringify(myNewsList));
        setFavList(myNewsList)

    }



    return {
        filteredNews,
        onChangeSearch,
        handleClickReadMore,
        handleClickFav
    }
}

export default useFav