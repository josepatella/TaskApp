import { Text, View, StyleSheet } from "react-native";

export function MessageScreen() {
    return (
        <>
            <View style={StyleSheet.container}>

            </View>
            <Text>
            Nao há mensagens para serem lidas.
            </Text>
        </>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
});