import { Ionicons } from '@expo/vector-icons'
import { Tabs, useNavigation } from 'expo-router'

export default function Layout(props: any) {
    const nav: any = useNavigation()

    function icone(nome: any) {
        return (props: any) => (
            <Ionicons name={nome} size={18} color={props.focused ? '#3A98FF' : '#000'} />
        )
    }

    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: icone('home-outline'),
                }}
            />
            <Tabs.Screen
                name="copas"
                options={{
                    title: 'Copas',
                    tabBarIcon: icone('heart'),
                }}
            />
            <Tabs.Screen
                name="espadas"
                options={{
                    title: 'Espadas',
                    tabBarIcon: icone('rocket'),
                }}
            />
            <Tabs.Screen
                name="ouros"
                options={{
                    title: 'Ouros',
                    tabBarIcon: icone('flash'),
                }}
            />
            <Tabs.Screen
                name="paus"
                options={{
                    title: 'Paus',
                    tabBarIcon: icone('medical'),
                }}
            />
        </Tabs>
    )
}
