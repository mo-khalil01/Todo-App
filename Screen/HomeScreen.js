
import React, {useContext} from 'react'
import { Text,View ,StyleSheet} from 'react-native'
import { UsernameContext } from '../Context/Context'

import ScreenWrapper from '../components/UI/ScreenWrapper';
export default function HomeScreen () {
    const [username, setUsername] = useContext(UsernameContext);
    return(
        <ScreenWrapper>

        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome !</Text>
            <Text style={styles.subtext}>You are logged as {username}</Text>
        </View>
        </ScreenWrapper>


    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },

    welcome: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },

    subtext: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
        textAlign: "center",
    },

});
