import React, {useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import VideoListItem from '../components/VideoListItem';
import { DataStore } from 'aws-amplify';

import { Video } from '../src/models/'

// import videos from '../assets/data/videos.json';


const HomeScreen = () => {

  // this is my state variable to hold the videos list 
  const [videos, setVideos] = useState<Video[]>([]);


  // this is how we fetch the data from the external database 
  useEffect(() => {

    DataStore.query(Video).then(setVideos)
      
    console.log(videos)
    

  }, []);



  return (
    <View>
      <FlatList
        data={videos}
        renderItem={({ item }) => <VideoListItem video={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({

});

export default HomeScreen;