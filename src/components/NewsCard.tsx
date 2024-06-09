
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Source {
    id: string
}

interface News {

    urlToImage: string,
    title: string,
    description: string,
    fav: boolean,
    source: Source,
    url: string

}

interface NewsCardProps {
    news: News,
    handleClickReadMore: (news: News) => void,
    handleClickFav: (news: News) => void

}

const NewsCard = ({ news,
    handleClickReadMore,
    handleClickFav
}: NewsCardProps) => {
    return (

        <Card variant='outlined' sx={{ height: "min-content" }} >

            <CardMedia
                component="img"
                width="160"
                height="auto"
                image={news?.urlToImage}
                alt={news?.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {news?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {news?.description}
                </Typography>


            </CardContent>
            <CardActions>
                <Button onClick={() => handleClickReadMore(news)} >
                    Read more
                </Button>
                <Button onClick={() => handleClickFav(news)}>
                    <FavoriteIcon sx={{ color: news?.fav ? 'red' : 'gray' }} />
                </Button>
            </CardActions>

        </Card>
    )
}

export default NewsCard