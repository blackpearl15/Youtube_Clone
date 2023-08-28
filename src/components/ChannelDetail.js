import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import ChannelCard from './ChannelCard';
import Videos from './Videos';
import { fetchFromApi } from '../utils/fetchFromApi';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();
  //console.log(channelDetail,videos);
  
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`)
    .then((data)=>setChannelDetail(data?.items[0]));

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>setVideos(data?.items));
    
  }, [id])
  

  return (
    <Box minHeight="95vh">
     <Box>
       <div style={{
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%,rgba(84,78,204,1) 43%, rgba(0,212,255,1) 100%)',
        zIndex:10,
        height:'400px'
       }}/>
      <ChannelCard channelDetail={channelDetail} mt={"-110px"} />
     </Box>
     <Box display="flex" p="2">
        <Box sx={{ ml : {sm : '100px' }}}>
          <Videos videos={videos} />
        </Box>
     </Box>
    </Box>
  )
}

export default ChannelDetail;