import React from 'react'
import { View, Text } from 'react-native'

import Padrao from '../estilo/Padrao'

function parOuImpar(num) {
    const value = num % 2 == 0 ? 'Par' : 'Ímpar'
    return <Text style={Padrao.ex}>{value}</Text>
}

export default props => <View>{parOuImpar(props.numero)}</View>