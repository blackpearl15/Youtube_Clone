import { Box } from '@mui/material';
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PageFeeds from './components/PageFeeds';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';



const App = () => (
    <BrowserRouter>
        <Box sx={{bgcolor:'#000'}}>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<PageFeeds />} />
            <Route path="/video/:id" exact element={<VideoDetail />} />
            <Route path="/channel/:id" exact element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
    </BrowserRouter>
)


export default App;