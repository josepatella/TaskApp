import { Text, View, StyleSheet } from "react-native";

export function LastActivitYScreen() {
    return (
        <>
            <View style={StyleSheet.container}>

            </View>
            <Text>
                Nao há atividades recentes na aplicação.
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