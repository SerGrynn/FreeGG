import { View, Text, Image, StyleSheet } from 'react-native'

type CardProps = {
  title: string
  thumbnail: string
}

export default function GameCard({ title, thumbnail }: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <Image src={thumbnail} style={styles.thumbnail} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  title: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold'
  }
})
