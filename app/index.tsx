import styles from '@/constants/styles'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
export default function TabInicial() {
    return (
        <View style={[styles.centralizado, { gap: 10 }]}>
            <Ionicons name="diamond-outline" size={100} color="silver" />
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 700, color: 'gray'  }}>Exercício dos Naipes</Text>
                <Text style={{ fontSize: 16, color: 'gray' }}>Navegação entre as Tabs</Text>
            </View>
        </View>
    )
}
