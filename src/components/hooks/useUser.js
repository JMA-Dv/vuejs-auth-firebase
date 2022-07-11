import { useRouter } from 'vue-router';
import { auth, firebase } from '../../services/firebase'
export const useUser = () => {
    const router = useRouter();

    const signIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            await router.push('/profile');

        } catch (error) {
            console.log("🚀 ~ file: useUser.js ~ line 6 ~ singIn ~ error", error);
        }
    }

    const signOut = async () => {
        try {
            await auth.signOut();
            await router.push('/');
        } catch (error) {
            console.log("🚀 ~ file: useUser.js ~ line 21 ~ signOut ~ error", error);
        }
    }
    return { signIn, signOut }

}