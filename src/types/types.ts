export interface IPizzaQueryParams {
  // то что приходит в query запрос
  sortBy: "rating" | "price" | "abc";
  search: string;
  category: number;
}

export type Pizza = {
  //что возвращает query запрос
  id: number;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
  sizes: number[];
  types: string[];
};

export interface SortOptions {
  // что хранится в сортировке select
  label: string;
  value: string;
}

export interface IPizzaItemProps {
  // пропсы для item pizza
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}
