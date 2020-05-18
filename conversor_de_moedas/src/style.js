import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AA4CF3',
        overflow: 'scroll'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'
    },
    title: {
        fontSize: 46,
        color: '#fff'
    },
    subTitle: {
        fontSize: 22,
        color: '#fff'
    },
    radiusContainer: {
        borderTopLeftRadius: 55,
        borderTopRightRadius: 55
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        backgroundColor: '#fff'
    },
    coin: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        marginTop: 13
    },
    coinTitle: {
        fontSize: 25
    },
    coinInput: {
        borderColor: '#3A4D68',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: '#EAEAEA',
        width: 170,
        height: 65,
        fontSize: 22,
        textAlign: 'center'
    },
    footer: {
        marginTop: 25,
        backgroundColor: '#6FDC87',
        alignItems: 'center'
    },
    titleInstruction: {
        marginTop: 20,
        fontSize: 22
    },
    textInstruction: {
        marginTop: 10,
        fontSize: 16,
        textAlign: 'justify',
        paddingHorizontal: 20
    },
    textDev: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 25
    }
});

export default styles;