const dev_initialState = {
  signUpList: [
    {
      username: "",
      password: "",
      name: "",
      field_id: "",
      student_num: "",
    },
  ],
};

const initialState = {
  signUpList: [],
};

// const isDev = prcess.env

const authReducer = (state = dev_initialState, action) => {
  switch (action.type) {
    case "1": {
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
