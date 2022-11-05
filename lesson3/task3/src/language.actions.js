//setLanguage - action creator - setLanguage('jp')

export const LANGUAGE = "LANGUAGE/CHANGE";


export const language = (lan) => {
  return {
    type: LANGUAGE,
    payload: lan,
  };
};



