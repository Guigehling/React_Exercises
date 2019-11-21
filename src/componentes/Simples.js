import React from 'react'
import { Text } from 'react-native'
import Padrao from '../estilo/Padrao'

// Usando function Normal
// export default function (props) {
//     return <Text>{props.texto}</Text>
// }

// Usando Arrow Function
export default props => <Text style={Padrao.ex}>{props.texto}</Text>
