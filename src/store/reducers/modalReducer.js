export const MODAL_ACTION_TYPE = {
  SET_STATE: 'MODAL/SET_STATE',
  OPEN: 'MODAL/OPEN',
  CLOSE: 'MODAL/CLOSE'
};


export const MODAL_TYPE = {
  ALERT: 'alert',
  CONFIRM: 'comfirm'
};


const modalReducer = (state, action = {}) => {
  const { payload, type } = action;
  switch (type) {
    case MODAL_ACTION_TYPE.SET_STATE: {
      return {
        ...state,
        ...payload
      };
    }
    case MODAL_ACTION_TYPE.OPEN: {
      return {
        ...state,
        loading: false,
        isOpen: true,
        ...payload
      };
    }
    case MODAL_ACTION_TYPE.CLOSE: {
      return {
        isOpen: false,
        title: null,
        message: null,
        type: null,
        onConfirm: null,
        onCancel: null
      };
    }
    default:
      return state;
  }
};

export default modalReducer;
