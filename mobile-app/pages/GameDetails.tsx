import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { game } from '../services/api/games/types'
import { getGameById } from '../services/api/games/requests'

export default function GameDetails({ route }) {
  // recuperate the id from the file requests.ts
  const { gameId } = route.params

  const [Agame, setAGame] = useState<game | null>(null)

  // get game by id
  useEffect(() => {
    getGameById(gameId).then((data) => {
      setAGame(data)
    })
  }, [])

  // return data contained in the game id
  return (
    <ScrollView>
      {Agame ? (
        <View style={styles.container}>
          <Text style={styles.title}>{Agame.title}</Text>
          <Image src={Agame.thumbnail} style={styles.thumbnail} />
          <Text>{Agame.status}</Text>
          <Text>{Agame.short_description}</Text>
          <Text>{Agame.description}</Text>
          <Text>{Agame.game_url}</Text>
          <Text>{Agame.genre}</Text>
          <Text>{Agame.platform}</Text>
          <Text>{Agame.publisher}</Text>
          <Text>{Agame.developer}</Text>
          <Text>{Agame.release_date}</Text>
          <Text>{Agame.freetogame_profile_url}</Text>
          <Text>{Agame.minimum_system_requirements.os}</Text>
          <Text>{Agame.minimum_system_requirements.processor}</Text>
          <Text>{Agame.minimum_system_requirements.memory}</Text>
          <Text>{Agame.minimum_system_requirements.graphics}</Text>
          <Text>{Agame.minimum_system_requirements.storage}</Text>
          {/* .map is used to return a array of object */}
          {Agame.screenshots.map((img, index) => (
            <Image key={index} src={img.image} style={styles.screenshot} />
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  thumbnail: {
    width: '100%',
    height: 200,
    marginBottom: 10
  },
  screenshot: {
    width: '100%',
    height: 200,
    marginBottom: 10
  }
})
