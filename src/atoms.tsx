import { atom, selector } from "recoil";

// enumerable(열거형) 기본 value는 숫자
export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

let output = localStorage.getItem("toDos");
let localData = JSON.parse(output as any);
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: localData,
});

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
