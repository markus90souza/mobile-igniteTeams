import { useState } from 'react'
import { FlatList } from 'react-native'
// Components
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { TeamCard } from '@components/Card/TeamCard'
import { ListEmpty } from '@components/ListEmpty'
import { Button } from '@components/Button'
// End Components
import { Container } from './styles'
import { useNavigation } from '@react-navigation/native'

const Groups = () => {
  const { navigate } = useNavigation()
  const [groups, setGroups] = useState<string[]>([])

  const handleAddNewGroup = () => {
    navigate('new')
  }

  return (
    <Container>
      <Header />
      <Highlight title={'Turmas'} subTitle={'Jogue com sua turma'} />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return <TeamCard title={item} />
        }}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message={'Nenhum team adicionado'} />
        )}
      />

      <Button title="Criar nova turma" onPress={handleAddNewGroup} />
    </Container>
  )
}
export { Groups }
