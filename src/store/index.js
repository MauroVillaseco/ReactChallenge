import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectAllElements } from "./selectors";
import { editElement, sortList } from "./actions";

export const useElementsStore = () => {
  // returns the dispatch function from redux, then we can trigger actions
  const dispatch = useDispatch();
  
  // useSelector return data from the store using a selector function
  const elements = useSelector(selectAllElements);
  const _sortElements = useCallback(array => dispatch(sortList(array)), [dispatch]);
  const _editElement = useCallback((newvalues,identifier) => dispatch(editElement(newvalues,identifier)), [dispatch]);

  return {
    elements,
    sortElements: _sortElements,
    editElement: _editElement

  };
};
