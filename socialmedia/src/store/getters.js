export default {
  categoriesCount: state => { return state.categories === null ? 0 : state.categories.length },
  contentTypesCount: state => { return state.contentTypes === null ? 0 : state.contentTypes.length },
};
