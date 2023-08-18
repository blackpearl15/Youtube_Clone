import React from 'react';
import { Link } from 'react-router-dom';
import { Typography,Card,CardContent,CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelTitle,demoProfilePicture,
demoThumbnailUrl,demoVideoUrl,demoVideoTitle, demoChannelUrl } from '../utils/constants';


const VideoCard = ({video : {id : {videoId},snippet}}) => {
  return (
    <Card sx={{width:{ md:'381px',xs:'100%' },
    boxShadow:'none',borderRadius:0 }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{width:382 , height:213 }}
            />
            <CardContent 
                sx={{bgcolor:'#1e1e1e',height:'106px'}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                 <Typography variant='subtitle1' 
                 fontWeight="bold" color="#fff" >
                  {snippet?.title.slice(0,60) || 
                  demoVideoTitle.slice(0,60)} 
                 </Typography>   
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` 
                 : demoChannelUrl }>
                 <Typography variant='subtitle2' 
                 fontWeight="bold" color="gray" >
                  {snippet?.channelTitle.slice(0,60) || 
                  demoChannelTitle.slice(0,60)}
                  <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}} /> 
                 </Typography>   
                </Link>
            </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard;