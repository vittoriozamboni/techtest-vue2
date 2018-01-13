export default {
  categoriesCount: state => { return state.categories === null ? 0 : state.categories.length },
};
