export const updateObject = (
  current: any,
  newObject: any,
  functionName: string,
  setter: (o: any) => void,
  param?: any,
) => {
  current[functionName](param);
  const g = Object.assign(newObject, current);
  setter(g);
};
