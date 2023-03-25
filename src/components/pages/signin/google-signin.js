import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignInWithApple from 'react-sign-in-with-apple';

const config = {
  // Firebase config here
};

firebase.initializeApp(config);

const SignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAppleSignIn = async (userData) => {
    const provider = new firebase.auth.OAuthProvider('apple.com');
    const credential = provider.credential({
      idToken: userData.authorization.id,
      rawNonce: userData.authorization.nonce,
    });
    try {
      await firebase.auth().signInWithCredential(credential);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <SignInWithApple
        clientId="your-apple-client-id"
        redirectURI="your-redirect-uri"
        onSuccess={handleAppleSignIn}
        onFailure={console.error}
      >
        <button>Sign in with Apple</button>
      </SignInWithApple>
    </div>
  );
};

export default SignIn;
