import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK',
};

// The action creators bundle actions with the data required to execute them
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task
function taskStateReducer(taskState) {
  return (state, action) => {
    return {
      ...state,
      tasks: state.tasks.map(task =>
        task.id === action.id ? { ...task, state: taskState } : task
      ),
    }
  }
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
}

// The initial state of our store when the app loads (usually you would fetch this from a server)
const defaultTasks = [
  { id: '1', title: 'To Do 1', state: 'TASK_INBOX' },
  { id: '2', title: 'To Do 2', state: 'TASK_INBOX' },
  { id: '3', title: 'To Do 3', state: 'TASK_INBOX' },
  { id: '4', title: 'To Do 4', state: 'TASK_INBOX' },
];

export default createStore(reducer, { tasks: defaultTasks });
