import { Button } from 'components/Button/Button';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';
// Импортируем объект значений фильтра
import { statusFilters } from '../../redux/constants';
export const StatusFilter = () => {
  const dispatch = useDispatch();
  // Получаем значение фильтра из состояния Redux
  const filter = useSelector(state => state.filters.status);
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
