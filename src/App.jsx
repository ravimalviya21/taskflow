import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './styles/global.css';
import AppRoutes from './routes';
import { useLocalStorage } from './hooks/useLocalStorage';
import { selectAllTasks, setTasks } from './store/tasksSlice';
import { TASKS_STORAGE_KEY } from './constants';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectAllTasks);
  const { getItem, setItem } = useLocalStorage(TASKS_STORAGE_KEY);
  const persistReady = useRef(false);

  useEffect(() => {
    const stored = getItem();
    if (Array.isArray(stored)) {
      dispatch(setTasks(stored));
    }
  }, [dispatch, getItem]);

  useEffect(() => {
    if (!persistReady.current) {
      persistReady.current = true;
      return;
    }
    setItem(tasks);
  }, [tasks, setItem]);

  return <AppRoutes />;
}

export default App
