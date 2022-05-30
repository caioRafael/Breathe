import { FC } from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Breathe: FC = () => {
    return(
        <View style={styles.container}>
            <View style={styles.upBreath}>
                <View style={styles.centralBreath}></View>
            </View>
        </View>
    )
}

export default Breathe

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#87BEF9',
      alignItems: 'center',
      justifyContent: 'center',
    },
    upBreath:{
        minWidth: 200,
        minHeight: 200,
        borderRadius: 100,
        backgroundColor: '#DDDDDD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centralBreath:{
        width: 120,
        height: 120,
        borderRadius: 100,
        backgroundColor: '#fff'
    }
  });