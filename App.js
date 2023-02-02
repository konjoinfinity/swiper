import React, {useRef} from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';

import CardsSwipe from 'react-native-cards-swipe';

const cardsData = [
  { src: require('./assets/apple.png') },
  { src: require('./assets/bananas.png') },
  { src: require('./assets/cherries.png') },
  { src: require('./assets/mango.png') },
  { src: require('./assets/orange.png') },
  { src: require('./assets/pear.png') },
  { src: require('./assets/pineapple.png') },
  { src: require('./assets/strawberry.png') },
  { src: require('./assets/watermelon.png') },
  { src: require('./assets/watermelon1.png') },
];

export default function App() {
  const swipe = useRef(null);
  return (
    <View style={styles.container}>
      <CardsSwipe
        ref={swipe}
        cards={cardsData}
        cardContainerStyle={styles.cardContainer}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image
              style={styles.cardImg}
              source={card.src}
            />
          </View>
        )}
      />
      <TouchableOpacity style={[styles.buttons, {backgroundColor: "#9bb783", bottom: 50, right: 50}]} onPress={ () => { swipe.current.swipeRight() }}>
    <Text style={{color: '#F8F7F1'}}>Right</Text>
  </TouchableOpacity>
  <TouchableOpacity style={[styles.buttons, {backgroundColor: "#924D40", bottom: 50, left: 50, }]} onPress={ () => { swipe.current.swipeLeft() }}>
    <Text style={{color: '#F8F7F1'}}>Left</Text>
  </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CAD2D9',
  },
  cardContainer: {
   justifyContent: 'center',
  },
  card: {
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.6,
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
    width: 300,
    height: 300,
    borderRadius: 13,
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