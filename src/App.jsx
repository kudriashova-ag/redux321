import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToDo } from './slices/ToDoSlice';

const App = () => {
    const todo = useSelector(state => state.todo);

    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch(getToDo()) 
    }, [])

    if (todo.loading) { 
        return 'Loading...'
    }

    return (
        <div>
            {todo.todo.map(item => <div>{item.title}</div>)}
        </div>
    );
}

export default App;
