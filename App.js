import React, {useRef, useState, useEffect} from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Dimensions, Alert } from 'react-native';
import Swiper from 'react-native-deck-swiper'

export default function App() {
  const [images, setImages] = useState([])
  const swipe = useRef(null);

  useEffect(() => {
    getImages();
  }, [])
  
  function getImages() {
        fetch("https://picsum.photos/v2/list", {
          method: "GET"
        }).then(res => res.json())
          .then(res => {
           var imgs = []
           res.map(img => {imgs.push({src: img.download_url + '?time=' + new Date() })})
           setImages(imgs)
          }).catch(error => {
            console.log(`${error.message}!`);
          });
    }

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, paddingTop: 60, textAlign: 'center', fontWeight: '300'}}>Swiper</Text>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {images.length > 0 && <Swiper
        ref={swipe}
        cards={images}
        stackSize={10}
        onSwipedRight={()=>Alert.alert("Liked!")}
        onSwipedLeft={()=>Alert.alert("Disliked!")}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image
              style={styles.cardImg}
              source={{uri: card.src}}
            />
          </View>
        )}
      />}
      </View>
      <TouchableOpacity style={[styles.buttons, {backgroundColor: "#9bb783", bottom: 50, right: 50}]} onPress={ () => { swipe.current.swipeRight() }}>
    <Text style={{color: '#F8F7F1'}}>Like</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.buttons, {backgroundColor: "#924D40", bottom: 50, left: 50, }]} onPress={ () => { swipe.current.swipeLeft() }}>
    <Text style={{color: '#F8F7F1'}}>Dislike</Text>
  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: '#CAD2D9',
  },
  card: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.55,
    backgroundColor: '#F8F7F1',
    borderRadius: 8,
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  buttons: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    height: 75, 
    width: 75, 
    borderRadius: 50, 
    alignItems: 'center', 
    justifyContent: 'center',
    position: 'absolute',
  }
});