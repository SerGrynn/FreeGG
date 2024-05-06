import { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { getGenre } from '../services/api/games/requests'
import GameCard from '../components/card/Card'
import { game } from '../services/api/games/types'
import { Picker } from '@react-native-picker/picker'

export default function Categories({ navigation }) {
  const [games, setGames] = useState<game[]>([])
  const [category, setCategory] = useState<string>('')
  const categories = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-Person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts'
  ]

  // get game by genre
  useEffect(() => {
    if (category) {
      getGenre(category).then((data) => {
        setGames(data)
      })
    }

    // useEffect callback is executed each time one of its dependencies changes
  }, [category])

  return (
    <ScrollView style={styles.container}>
      {/* Dropdown menu display all categories */}
      <Picker selectedValue={category} onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
        {categories.map((genre) => {
          return <Picker.Item label={genre} value={genre}></Picker.Item>
        })}
      </Picker>
      {games.map((game) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('GameDetails', { gameId: game.id })}>
            <GameCard title={game.title} thumbnail={game.thumbnail} />
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
