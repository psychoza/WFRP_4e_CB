export function sortArrayByProperty(collection: any[], propertyName: string, isDescending: boolean = false) {
  collection.sort((left, right) => {
      let l = left[propertyName].toLowerCase();
      let r = right[propertyName].toLowerCase();
      let comparisonResult: number = 0;
      if (l < r) {
          comparisonResult = -1;
      }
      else if (l > r) {
          comparisonResult = 1;
      }
      return isDescending ? comparisonResult * -1 : comparisonResult;
  });
}

export function setArrayPropertyToNumber(collection: any[], propertyName: string){
  collection.forEach((i) => {
    i[propertyName] = Number.parseInt(i[propertyName].toString());
  });
}
