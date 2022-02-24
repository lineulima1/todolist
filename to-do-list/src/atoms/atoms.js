import { atom } from "recoil";

const setLocalStorage =
  (key) =>
  ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const textState = atom({
  key: "TextState",
  default: "",
});
export const textTitleState = atom({
  key: "TextTitleState",
  default: "",
});
export const MapList = atom({
  key: "MapList",
  default: [],
  effects: [setLocalStorage("todolist")],
});
export const listStatus = atom({
  key: "listStatus",
  default: "all",
});
export const editState = atom({
  key: "editState",
  default: {
    index: -1,
    showEdit: false,
  },
});
