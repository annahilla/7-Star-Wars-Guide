// useStarships.js
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { fetchStarships } from '../redux/starshipsSlice';
import { AppDispatch, RootState } from '../redux/store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const useStarships = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { starships, nextPage, loading, error } = useTypedSelector(
    (state) => state.starships
  );

  const loadMoreStarships = () => {
    if (nextPage && !loading) {
      dispatch(fetchStarships(nextPage));
    }
  };

  return {
    starships,
    nextPage,
    loading,
    error,
    loadMoreStarships,
  };
};

export default useStarships;
