import { ActionType } from '../action-types/index'



interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
}

interface SearchReposSuccess {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchReposError {
  type: ActionType.SEARCH_REPOS_ERROR;
  payload: string;
}

export type Action =     
  | SearchReposAction 
  | SearchReposSuccess 
  | SearchReposError;

