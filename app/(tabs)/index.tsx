import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#7A1FA0',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#7A1FA0',
  },
});
