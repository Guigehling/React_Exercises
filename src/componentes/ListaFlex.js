import React from 'React'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9 },
    { id: 2, nome: 'Maria', nota: 8.9 },
    { id: 3, nome: 'Andreia', nota: 5.4 },
    { id: 4, nome: 'Luisa', nota: 2.9 },
    { id: 5, nome: 'Pedro', nota: 5.8 },
    { id: 6, nome: 'Victória', nota: 10.0 },
    { id: 7, nome: 'Guilherme', nota: 9.9 },
    { id: 8, nome: 'Julia', nota: 7.0 },
    { id: 9, nome: 'Adão', nota: 8.9 },

    { id: 11, nome: 'João', nota: 7.9 },
    { id: 12, nome: 'Maria', nota: 8.9 },
    { id: 13, nome: 'Andreia', nota: 5.4 },
    { id: 14, nome: 'Luisa', nota: 2.9 },
    { id: 15, nome: 'Pedro', nota: 5.8 },
    { id: 16, nome: 'Victória', nota: 10.0 },
    { id: 17, nome: 'Guilherme', nota: 9.9 },
    { id: 18, nome: 'Julia', nota: 7.0 },
    { id: 19, nome: 'Adão', nota: 8.9 },
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    //Flex
    alignItens: 'center',
    flexDirection: 'row',
    justfyContent: 'space-between',
    // justfyContent: 'space-around',
    // alignItens: 'flex-start',
    // alignItens: 'flex-end' 
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{ fontWeight: 'bold' }}>Nota: {props.nota}</Text>
    </View>

export default props => {
    const renderItem = ({ item }) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos}
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )

}
