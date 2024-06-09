import useFav from './hooks/useFav';
import NewsCard from '../../components/NewsCard'
import { Grid } from '@mui/material'

interface News {

    urlToImage: string,
    title: string,
    description: string,
    fav: boolean,
    source: { id: string },
    url: string

}

function Favourites() {

    const {
        filteredNews,
        handleClickReadMore,
        handleClickFav } = useFav();

    return (
        <>
            {filteredNews?.length === 0 ?
                <p className='favEmpty'>You don't have any item on Favourite Page!</p> :
                <div className="container my-3">
                    <Grid container sx={{ paddingTop: 12, paddingLeft: 10, paddingRight: 10 }} spacing={2}>
                        {filteredNews.map((news: News) => {

                            return <Grid item xs={12} lg={3} key={news.source?.id}>

                                <NewsCard
                                    news={news}
                                    handleClickReadMore={handleClickReadMore}
                                    handleClickFav={handleClickFav}
                                />

                            </Grid>
                        })
                        }


                    </Grid>
                </div>}

        </>
    )
}

export default Favourites