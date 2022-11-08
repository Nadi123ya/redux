export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const selectedOptionsSelector = state => {
 const allOprtions = state.options.optionsList;
 const selectedIds = state.options.selected;
 return allOprtions.filter(option => selectedIds.includes(option.id))
}

export const availableOptionsSelector = state => {
  const allOprtions = state.options.optionsList;
  const selectedIds = state.options.selected;
  return allOprtions.filter(option => !selectedIds.includes(option.id))
 }