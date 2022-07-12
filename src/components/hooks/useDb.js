import { ref } from 'vue';
import { database,serverTime } from '../../services/firebase'
import {useAuth} from '@vueuse/firebase'

export const useDb = () => {
    const reference = database.collection('TODOS');
    const isLoading = ref(false)
    const {user} = useAuth();


    const getTodos = async () => {
        try {
            isLoading.value = true;
            const res = await reference.get()
            return res.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))

        } catch (error) {
            return {
                error,
                res: true
            }

        } finally {
            isLoading.value = false
        }
    }
    const addTodo = async ( text)=>{
        try {
            
            const todo = {
                text:text,
                date: serverTime(),
                state: false,
                uid:user.value.uid

            }
            const res = await reference.add(todo);
            return {
                id:res.id,
                ...todo
            }
            
        } catch (error) {
            return {
                error,
                res: true
            }
        } 
    }

    const deleteTodoAsync = async(id)=>{
        try {
            await reference.doc(id).delete();
            return {res:false}
        } catch (error) {
            return{
                error,
                res:true,
            }   
        }
    }
    const updateTodo  = async(todo)=>{
        //When modifying instead on senting all object can be only modified a property like patch
        try {
            await reference.doc(todo.id).update({
                state:!todo.state
            })
            return {
                res:false
            }
        } catch (error) {
            return {
                error,
                res:true
            }
        }
    }
    return { getTodos,addTodo,deleteTodoAsync,updateTodo }
}