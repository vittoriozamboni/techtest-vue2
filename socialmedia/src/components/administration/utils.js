export const FormUtils = {
  editEntry (component, { entry, formVariableName, emptyEntry }) {
    if (entry) {
      component[formVariableName] = Object.assign({}, entry);
    } else {
      component[formVariableName] = Object.assign({}, emptyEntry);
    }
  },
  closeModalForm (component, { formVariableName, fetchData }) {
    component[formVariableName] = {};

    if (fetchData) {
      component.fetchData();
    }
  }
};
