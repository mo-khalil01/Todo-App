
import React, {useContext,useState} from 'react'
import { View, Text ,StyleSheet,TouchableOpacity, Button} from 'react-native'
import { TokenContext } from '../Context/Context'
import ScreenWrapper from '../components/UI/ScreenWrapper';

import styles from '../style/styles';

export default function SignOutScreen () {
  const [token, setToken] = useContext(TokenContext);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleConfirmSignOut = () => {
    setShowConfirm(false);
    setToken(null); 
  };

  return (
    <ScreenWrapper>
      <View style={styles.SignOutDeleteContainer}>
        <View style={styles.container}>

      <Text style={styles.bigText}>Sign Out</Text>
      <Text style={styles.smallText}>Press the button below to log out safely.</Text>

      <TouchableOpacity 
        style={styles.redButton}
        onPress={() => setShowConfirm(true)}
      >
        <Text style={styles.redButtonText}>Sign Out</Text>
      </TouchableOpacity>

        </View>
    </View>
      {showConfirm && (
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Sign Out</Text>
            <Text style={styles.modalText}>
              Are you sure you want to sign out?
            </Text>

            <View style={styles.modalButtons}>

              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowConfirm(false)}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirmSignOut}
              >
                <Text style={styles.modalButtonText}>Sign Out</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      )}
      </ScreenWrapper>
  );
}

