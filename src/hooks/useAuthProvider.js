import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const useAuthProvider = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuthProvider;