export const mainContentTypes = {
  CHANGE_PAGE:     'CHANGE_PAGE'
}

export const changeToHome = (pPage) => (dispatch) => {
  dispatch({
    type: mainContentTypes.CHANGE_PAGE,
      payload: {
        page: pPage
      }
  });
}