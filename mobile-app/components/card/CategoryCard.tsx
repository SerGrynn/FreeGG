import { View, Text, Image, StyleSheet } from 'react-native'

type CardProps = {
  title: string
  thumbnail: string
}

export default function CategoryCard({ title, thumbnail }: CardProps) {
  return (
    <View style={styles.view}>
      <Image src={thumbnail} style={styles.image} />
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  image: {
    width: 150,
    height: 100
  }
})
