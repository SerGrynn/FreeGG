import { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { getPlatform } from '../services/api/games/requests'
import GameCard from '../components/card/Card'
import { game } from '../services/api/games/types'
import { Picker } from '@react-native-picker/picker'

export default function Settings({ navigation }) {
  const [games, setGames] = useState<game[]>([])
  const [platform, setPlatform] = useState<string>('')
  const Platforms = ['pc', 'browser', 'all']

  // get game by genre
  useEffect(() => {
    if (platform) {
      getPlatform(platform).then((data) => {
        setGames(data)
      })
    }

    // useEffect callback is executed each time one of its dependencies changes
  }, [platform])

  return (
    <ScrollView style={styles.container}>
      {/* Dropdown menu display all categories */}
      <Picker selectedValue={platform} onValueChange={(itemValue, itemIndex) => setPlatform(itemValue)}>
        {Platforms.map((plat) => {
          return <Picker.Item label={plat} value={plat}></Picker.Item>
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
