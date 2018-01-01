export default function reducer (state = {}, action) {
  swich (action.type) {
    case 'ADD_BIRD':
      return {
        ...state,
        birds: [...state.birds, action.bird]
      };
      default:
      return state;
  }
}