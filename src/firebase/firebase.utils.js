import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBoMilRCgk8sAo6hv3ch1hC-dFdZUdkGWQ',
  authDomain: 'crwn-clothing-db-kc.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-db-kc.firebaseio.com',
  projectId: 'crwn-clothing-db-kc',
  storageBucket: 'crwn-clothing-db-kc.appspot.com',
  messagingSenderId: '611095468051',
  appId: '1:611095468051:web:2a12afe3e6865135e287e6'
}

export const createUserProfileDOcument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
