export type Favorite = {
  id: string;
  name: string;
  flg: boolean;
};

export const FavoStoreKey = "favo2021";

export const flgCheck = (prop: Favorite) => {
  const { flg } = prop;
  if (flg === undefined || flg === false) {
    return false;
  }
  return true;
};
