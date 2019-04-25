//ACTION TYPE
const SET_PLAYER = "SET_PLAYER";

//ACTION CREATOR
export const settingplayer = player => ({
  type: SET_PLAYER,
  player
});

const initialState = {};
//REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER:
      return { ...state, player: action.player };
    default:
      return state;
  }
}
