export const INPUT_VALUE = "USERS/INPUT_VALUE";

export const setFilterText = (value) => {
  return {
    type: INPUT_VALUE,
    payload :{
        value
    }
  };
};

export const handleInput = (e) => {
        setFilterText(e.taget.value);
      };
    

  
 