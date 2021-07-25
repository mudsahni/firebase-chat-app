import * as React from 'react'

import {useHistory} from 'react-router-dom'
import {auth} from '../firebase'
import firebase from 'firebase'

const AuthContext = React.createContext<firebase.User | null>(null)
export const useAuth = () => React.useContext(AuthContext)

export const AuthProvider = ({children}: {children: React.ReactNode}) => {

    const [loading, setLoading] = React.useState<boolean>(true)
    const [user, setUser] = React.useState<firebase.User | null>(null)
    const history = useHistory()

    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
            if (user) history.push('/chats')
        })
    }, [user, history])

    const value = {user}
    return (
        <AuthContext.Provider value={value.user}>
            {!loading && children}
        </AuthContext.Provider>
    )
}