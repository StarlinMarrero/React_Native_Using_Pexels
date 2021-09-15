import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getImages } from "../api/pexels";
import ImageList from '../components/ImageList'
const HomeScreen = () => {


    const [photos, setphotos] = useState([]);


  const loadImages = async () => {
    const res = await getImages();
    setphotos(res.data.photos);
    console.log(res);
  };

  useEffect(() => {
    console.log("Cargo");
    loadImages();
  }, []);

  return (
    <View>
      <ImageList photos={photos} />
    </View>
  );
};

export default HomeScreen;
