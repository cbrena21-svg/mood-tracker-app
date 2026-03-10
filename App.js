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
        <TouchableOpacity onPress={handlePlus} style={styles.button}>
          <FontAwesome5 name="plus" size={60} color="#A96361" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMinus} style={styles.button}>
          <FontAwesome5 name="minus" size={60} color="#A96361" />
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
    fontSize: 26,
    color: '#7A4E5C',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 20,
  },
  imageContainer: {
    width: '75%',
    height: 280,
    backgroundColor: '#FFE4EC',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  moodText: {
    fontSize: 24,
    color: '#7A4E5C',
    marginTop: 15,
    fontWeight: '600',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 60,
  },
  button: {
    backgroundColor: '#EDCECC',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,

  },
});
