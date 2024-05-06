import React, { useEffect, useState } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native'
import { getAllGames } from '../services/api/games/requests'
import { game } from '../services/api/games/types'
import GameCard from '../components/card/Card'

export default function Home({ navigation }) {
  const [games, setGames] = useState<game[]>([])

  // get all games
  useEffect(() => {
    getAllGames().then((data) => {
      setGames(data)
    })
  }, [])

  return (
    <ScrollView style={styles.container}>
      {games.map((game, index) => {
        return (
          <View key={index}>
            <TouchableOpacity onPress={() => navigation.navigate('GameDetails', { gameId: game.id })}>
              <GameCard title={game.title} thumbnail={game.thumbnail} />
            </TouchableOpacity>
          </View>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' // Beige color
  },
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 20
  }
})
