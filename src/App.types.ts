export type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};
  
export type Stories = Array<Story>;

export type StoriesState = {
  data: Stories;
  page: number;
  isLoading: boolean;
  isError: boolean;
};

export interface StoriesFetchInitAction {
  type: 'STORIES_FETCH_INIT';
}

export interface StoriesFetchSuccessAction {
  type: 'STORIES_FETCH_SUCCESS';
  payload: {
    list: Stories;
    page: number;
  }
}

export interface StoriesFetchFailureAction {
  type: 'STORIES_FETCH_FAILURE';
}

export interface StoriesRemoveAction {
  type: 'REMOVE_STORY';
  payload: Story;
}

export type StoriesAction =
  | StoriesFetchInitAction
  | StoriesFetchSuccessAction
  | StoriesFetchFailureAction
  | StoriesRemoveAction;

