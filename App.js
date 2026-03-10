import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function App() {
  const [mood, setMood] = useState(0);
  const images = [
    require('./assets/images/pensando.jpg'),
    require('./assets/images/lutea.jpg'),
    require('./assets/images/menstrual.jpg'),
    require('./assets/images/folicular.jpg'),
    require('./assets/images/ovulacion.jpg'),
  ];
  const moodText = [
    'Pensando...',
    'Lutea',
    'Menstrual',
    'Folicular',
    'Ovulación',
  ];
  const [image, setImage] = useState(images[0]);
  const [text, setText] = useState(moodText[0]);

  const handlePlus = () => {
    if (mood < 4) {
      setMood(mood + 1);
    }
  };
  const handleMinus = () => {
    if (mood > 1) {
      setMood(mood - 1);
    }
  };

  useEffect(() => {
    setImage(images[mood]);
    setText(moodText[mood]);
  }, [mood]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hola! Representa en este changuito cuál fue tu mood de hoy.</Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.moodText}>{text}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleMinus} style={styles.button}>
          <FontAwesome5 name="minus" size={50} color="#A96361" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePlus} style={styles.button}>
          <FontAwesome5 name="plus" size={50} color="#A96361" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginVertical: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    flex: 2,
    backgroundColor: 'red',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imageContainer: {
    flex: 4,
    backgroundColor: 'blue',
    width: '65%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  moodText: {
    flex: 1,
    backgroundColor: 'green',
    fontSize: 25,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 120,
  },
  button: {
    backgroundColor: '#EDCECC',
    padding: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,

  },
});
