import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: '#FFF',
        paddingHorizontal: 15,
        paddingTop: 100,
    },
    container: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    h1: {
        color: '#000',
        fontSize: 27,
        fontWeight: 'bold',
        marginVertical: 10
    },
    h2: {
        color: '#999',
        fontSize: 15
    },
    inputArea: {
        width: '100%',
        paddingTop: 20,
    },
    inputLabel: {
        color: '#777',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 7
    },
    inputField: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: "#DDD",
        fontSize: 15,
        padding: 10
    },
    aditionals: {
        width: '100%',
    },
    forgotBtnArea: {
        alignSelf: 'flex-end',
        paddingVertical: 20,
    },
    forgotBtnText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#4162b7'
    },
    button: {
        backgroundColor: "#4162b7",
        width: '100%',
        padding: 15,
        borderRadius: 5,
    },
    buttonText: {
        alignSelf: 'center',
        color: '#FFF',
        fontSize: 16
    },
    signUpArea: {
        marginTop: 30,
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
        gap: 10
    },
    signUpText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#999'
    },
    signUpBtnText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4162b7'
    },
    footer: {
        marginTop: 20
    },
    footerText: {
        fontSize: 15,
        color: "#999"
    }
})