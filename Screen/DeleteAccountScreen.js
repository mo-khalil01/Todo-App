import React, { useContext, useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { TokenContext, UsernameContext } from '../Context/Context';
import { deleteUser } from '../servicesGraphql/signRequests.js';
import ScreenWrapper from '../components/UI/ScreenWrapper';

import styles from '../style/styles.js';
export default function DeleteAccountScreen() {
    const [token, setToken] = useContext(TokenContext);
    const [username, setUsername] = useContext(UsernameContext);
    const [showConfirm, setShowConfirm] = useState(false);

    const handleConfirmDelete = async () => {
      setShowConfirm(false);
        try {
            const response = await deleteUser(username, token); 
            console.log(response.nodesDeleted);
            if (response && response.nodesDeleted > 0) {
              
                setToken(null); 
                setUsername(null);
            } else {
                console.log("Error", "compte non trouvé.");
            }
        } catch (error) {
            console.log("Error", "echec de suprission");
        }
    };



    return (
      <ScreenWrapper>
        <View style={styles.SignOutDeleteContainer}>
        
        <View style={styles.container}>
            <Text style={styles.bigText}>Delete Account</Text>
            <Text style={styles.smallText}>Press the button below to delete your account</Text>
            
            <TouchableOpacity style={styles.redButton} onPress={() => setShowConfirm(true)}>
                <Text style={styles.redButtonText}>Delete Account</Text>
            </TouchableOpacity>
        </View>

        </View>
            {showConfirm && (
            <View style={styles.overlay}>
              <View style={styles.modal}>
                <Text style={styles.modalTitle}>Are you sure?</Text>
                <Text style={styles.modalText}>Do you really want to delete your account?</Text>

                <View style={styles.modalButtons}>
                    <TouchableOpacity 
                      style={[styles.modalButton, styles.cancelButton]} 
                      onPress={() => setShowConfirm(false)}
                    >
                      <Text style={styles.modalButtonText}>Cancel</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={[styles.modalButton, styles.confirmButton]} 
                      onPress={handleConfirmDelete}
                    >
                      <Text style={styles.modalButtonText}>Confirm</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
          )}
        </ScreenWrapper>
    );
}

