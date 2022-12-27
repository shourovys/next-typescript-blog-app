export function capitalizeFirstLetter(categoryString: string) {
  return categoryString.charAt(0).toUpperCase() + categoryString.slice(1);
}
export function removeHyphen(categoryString: string) {
  return categoryString.split("-").join(" ");
}
