import { useState } from "react";

export function useList<T>(defaultValues: T[] = []) {
  const [items, setItems] = useState<T[]>(defaultValues);

  const appendItem = (item: T) => {
    setItems((items) => items.concat(item));
  };

  const deleteItem = (index: number) => {
    setItems((items) => items.filter((_, itemIndex) => itemIndex !== index));
  };

  return {
    items,
    appendItem,
    deleteItem,
    setItems,
  };
}
