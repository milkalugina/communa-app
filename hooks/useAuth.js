import React, { createContext, useContext } from 'react';
import * as Google from "expo-google-app-auth";
import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithCridential,
    signOut,
} from "@firebase/auth";

const AuthContext = createContext({});

const config = {
    iosClientId: "560608143962-8u3s7r6o7smeln1q332ik5fjv5ughf9v.apps.googleusercontent.com",
    androidClientId: "560608143962-37qo8jhmv3m0hs3gcbsq36s3moha47ap.apps.googleusercontent.com",
    scopes: ["profile", "email"],
    permissions: ["public_profile", "email", "name", "age", "gender", "location"],
}

export const AuthProvider = ({ children }) => {

    const signInWithGoogle = async () => {
        await Google.logInAsync(config).then(async (logInResult) => {
            if (logInResult.type === 'success') {
                const { idToken, accessToken } = logInResult;
                const cridential = GoogleAuthProvider.cridential(idToken, accessToken);

                await signInWithCridential(cridential);
            }
            
            return Promise.reject();
        });
    };

    return ( 
        <AuthContext.Provider 
        value={{
            user: null,
            signInWithGoogle,
        }}
        >
            {children}
        </AuthContext.Provider>
    );
}; 

export default function useAuth() {
    return useContext(AuthContext);
};
 