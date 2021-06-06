export function capitalize(str) {
  return str[0].toUpperCase() + str.substring(1);
}

export function dashify(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z\d])/g, '$1-').toLowerCase();
}
