export const updateObject = (
  current: any,
  newObject: any,
  functionName: string,
  setter: (o: any) => void,
  param?: any,
) => {
  const g = Object.assign(newObject, current);
  g[functionName](param);
  setter(g);
};
