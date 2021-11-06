import { useRouter } from 'next/router';
import {useEffect} from 'react';
import {actions} from '../../store/actions/project';
import {useDispatch, useSelector} from 'react-redux';

const Project = () => {
    const dispatch = useDispatch();
    const {query} = useRouter()
    console.log(query)
    const {project, loading} = useSelector(state=>state.projects)
    useEffect(()=>{
        const {id} = query
        console.log(actions.get_start(id))
        if(id){
            dispatch(actions.get_start(id))
        }
    },[query]);
    return <h1>
        {project.name}
    </h1>
}

export default  Project