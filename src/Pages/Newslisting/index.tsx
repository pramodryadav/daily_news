import useFetchNews from './hooks/useFetchNews';
import { Grid } from '@mui/material';
import NewsCard from '../../components/NewsCard';
import RadioList from '../../components/RadioList';
import Loader from '../../components/Loader';




interface News {

  urlToImage: string,
  title: string,
  description: string,
  fav: boolean,
  source: { id: string },
  url: string

}

function NewsListing() {

  const {
    filteredNews,
    handleClickReadMore,
    handleClickFav,
    handleChangeEndePoint,
    endPoints,
    endPoint,
    isLoading
  } = useFetchNews();


  return (
        <>
        <Loader open={isLoading}/>
         
          <Grid container  spacing={2} sx={{padding:"100px 20px 0px"}}>
          <Grid item xs={12} className='flex justifyC-end'>
              <RadioList
               label=""
               radioList={endPoints}
               handleChange={handleChangeEndePoint}
               value={endPoint}
              />
            </Grid>
            {filteredNews.length > 0 && filteredNews?.map((news: News) => {
              
              return <Grid item xs={12} md={6} lg={4} xl={3} key={news.title+news.description}>
                <NewsCard
                  news={news}
                  handleClickReadMore={handleClickReadMore}
                  handleClickFav={handleClickFav}
                />
              </Grid>
            })
            }
          </Grid>
        </>

  )
}

export default NewsListing