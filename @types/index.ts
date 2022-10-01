export interface IPizza {
  id: number;
  name: string;
  price: number;
  ingredients: IIngredients[];
}

export interface IIngredients {
  id: number;
  name: string;
}
