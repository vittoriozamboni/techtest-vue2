import * as R from 'ramda';

export function composeFilters (template) {
  const filters = {};
  for (const prop of R.keys(template)) {
    if (Array.isArray(template[prop])) {
      filters[prop] = R.contains(template[prop]);
    } else {
      filters[prop] = R.equals(template[prop]);
    }
  }
  return filters;
}

export function createFilters (template) {
  const filters = composeFilters(template);
  return R.filter(R.where(filters));
};
