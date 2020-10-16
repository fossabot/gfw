import { createStructuredSelector } from 'reselect';

// get list data
const selectQuery = (state) => state.search?.query;
const selectSearchData = (state) => state.search && state.search.data;
const selectSearchLoading = (state) => state.search && state.search.loading;

export const getSearchProps = createStructuredSelector({
  query: selectQuery,
  data: selectSearchData,
  loading: selectSearchLoading,
});
