import { createSelector } from "reselect";

// export const optionsListSelector = (state) => {
//   return Object.values(state.options.optionsList);
// };

export const optionsListSelector = (state) => {
  return state.options.optionsList;
};

export const selectedIdSelector = (state) => {
  return state.options.selected;
};

// export const selectedOptionsSelector = state => {
//  const allOptions = optionsListSelector(state);
//  const selectedIds = selectedIdSelector(state);
//  return allOptions.filter(option => selectedIds.includes(option.id))
// }

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter((option) => selectedIds.includes(option.id));
  }
);

// export const availableOptionsSelector = (state) => {
//   const allOprtions = optionsListSelector(state);
//   const selectedIds = selectedIdSelector(state);
//   return allOprtions.filter((option) => !selectedIds.includes(option.id));
// };

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptions, selectedIds) => {
    return allOptions.filter((option) => !selectedIds.includes(option.id));
  }
);