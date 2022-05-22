// imports
import { useState, useEffect } from 'react';
import InitializeFirebaseApp from '../firebase/firebase.init';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged
} from 'firebase/auth';

//global declarations
InitializeFirebaseApp();

const useFirebase = () => {
	// -- states --
	const [user, setUser] = useState(null);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	// -- context and constants --
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();

	// -- functionalities --

	// login user with google
	const handleGoogleLogin = () => {
        setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				console.log(result.user);
                setUser(result.user);
			})
			.catch((error) => {
				console.log('error in google login',error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// register user
	const handleRegisterUser = (email, password, userDetails) => {
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(user);
                setUser(result.user);

                // after getting user - updating user information
                updateProfile(auth.currentUser ,{displayName: userDetails.name})
                    .then(() => {
                        console.log('profile updated')
                    }).catch(error => {
                        console.log('error in updating profile', error);
                    })

                // TODO: store the user in database 
			})
			.catch((error) => {
				console.log(
					'there is something wrong while signing off!',
					error
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
    };

    // login already existing user
    const handleLoginUser = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result.user);
                setUser(result.user);
			})
			.catch((error) => {
				console.log('error in login with email', error);
			})
			.finally(() => {
				setIsLoading(false);
			});
    }

	// signout user
	const handleSignOut = () => {
        setIsLoading(true);
		signOut(auth)
			.then((result) => {
				console.log('you are successfully signed off!');
                setUser(null);
			})
			.catch((error) => {
				console.log(
					'there is something wrong while signing off!',
					error
				);
			})
            .finally(() => {
                setIsLoading(false);
            })

	};

    //handling auth state observer
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user) {
              setUser(user)
          } else {
              setUser(null)
          }
      })
    
      return () => unsubscribe;
    }, [auth])
    

	return {
		user,
		isLoading,
        error,
		setIsLoading,
		handleGoogleLogin,
        handleRegisterUser,
        handleLoginUser,
		handleSignOut,
	};
};

export default useFirebase;
