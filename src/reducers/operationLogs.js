import { actions } from "../actions";

const operationLogs = (state = [], action) => {
  switch(action.type) {
    case actions.ADD_OPERATION_LOG:
    const operationLog = {
      description: action.description,
      operatedAt: action.operatedAt,
    }  
    return [operationLog, ...state]
    case actions.DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default operationLogs