import find from 'lodash/find';

export const getCountryIdByName = (name, list) => {
  const value = find(list, ['country', name]);
  console.log('value',value);
  console.log('name',name);
  console.log('list',list);
  if (value) {
    return value.id;
  } else return undefined;
}
