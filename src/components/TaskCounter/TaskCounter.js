// import css from "./TaskCounter.module.css";

// export const TaskCounter = () => {
//   return (
//     <div>
//       <p className={css.text}>Active: 0</p>
//       <p className={css.text}>Completed: 0</p>
//     </div>
//   );
// };
// Импортируем хук
import { useSelector } from 'react-redux';
// import { getTasks } from 'redux/selectors';
export const TaskCounter = () => {
  // Получаем массив задач из состояния Redux
  const tasks = useSelector(state => state.tasks);
  // const tasks2 = getTasks;
  // console.log('tasks2', tasks2);
  // На базе состояния Redux получаем производные данные
  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );
  return (
    <div>
      <p>Active: {count.active}</p>
      <p>Completed: {count.completed}</p>
    </div>
  );
};
