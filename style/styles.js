import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    errorText: {
        color: "red",
        fontSize: 13,
        textAlign: "center", 
        marginTop: 5
    },

    card: {
        backgroundColor: "rgba(255,255,255,0.6)",
        padding: 20,
        borderRadius: 18,
        maxWidth: "90%",
        width: 700,
        alignSelf: "center",
        marginTop: 40,
        marginBottom:40,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,
        flex:1,
    },

   authContainer :{
       backgroundColor: "rgba(255,255,255,0.6)",
        padding: 20,
        borderRadius: 18,
        maxWidth: "90%",
        width: 500,
        alignSelf: "center",
        marginTop: 40,
        marginBottom:40,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 5,

     },

    inputRow: {
        flexDirection: "column",
        alignItems: "center",
        marginHorizontal: 12,
        marginVertical: 10,
    },
  
    input:{
        placeholderTextColor: 'gray',
        height: 40,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        marginBottom: 5,
        width: "100%",
        

    },

    formInput : {
        placeholderTextColor: 'gray',
        backgroundColor: "white",
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#dcdcdc",
        marginBottom: 12,
    },
    
    addBtn:{
        backgroundColor: "#007BFF",
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        marginTop: 10,
        width: "100%"
        

    },
    addBtnText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 16,
    },

    listItemWrapper: {
        width: "92%",
        alignSelf: "center",
        marginTop: 1,
        overflow:"hidden",

    },


    counterText: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 15,
        marginBottom: 10,
    },

    progressBar: {
        height: 12,
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: 10,
        marginBottom: 10,
        overflow: "hidden",
    },

    progressFill: {
        height: "100%",
        backgroundColor: "green",
        borderRadius: 10,
    },

    actionBar: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        justifyContent: "center",
        flexGrow: 1,
        gap: 12,
        marginTop: 15,
        marginBottom: 10,
    },

    iconBtn: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    
    icon: {
        width: 24,
        height: 24,
        tintColor: "white", 
    },

    listTitle: {
        color: "#1ec28bff",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10,
        //marginBottom: 15,
    },

    title: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        marginBottom: 20,
    },

   linkText: {
        marginTop: 12,
        textAlign: "center",
        color: "#555",
    },
    link: {
        color: "#3D8DFF",
        fontWeight: "600",
        textAlign: "center",

    },



  //partie commun entre signOut et deleteAccount

    SignOutDeleteContainer: {
        backgroundColor: "rgba(255,255,255,0.6)",
        padding: 20,
        borderRadius: 18,
        width: "70%",
        maxWidth:500,
        marginBottom: 40,
        marginTop: 60,
        alignSelf: "center",
        shadowColor: "#000",
        shadowOpacity: 0.12,
        shadowRadius: 12, 
        elevation: 6,
        backdropFilter: "blur(10px)", 
        justifyContent: 'center',
    },


    bigText: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 10,
    },
    smallText: {
        fontSize: 16,
        color: "#2e2b2bff",
        marginBottom: 30,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    redButton: {
        backgroundColor: "#d63031",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    redButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },

    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        //width: "20%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        elevation: 10,
    },

    modalTitle: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
    },

    modalText: {
        fontSize: 16,
        marginBottom: 20,
    },

    modalButtons: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    modalButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginLeft: 10,
    },

    cancelButton: {
        backgroundColor: "#bdc3c7",
    },

    confirmButton: {
        backgroundColor: "#e84118",
    },

    modalButtonText: {
        color: "white",
        fontWeight: "bold",
    },
})


export default styles;