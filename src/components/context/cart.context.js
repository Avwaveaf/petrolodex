import { createContext, useState } from "react";
const selectedDatas = [];
export const CartContext = createContext({
  pet: [],
  setSelectedDatas: () => {},
  cartCount: 0,
});

export const CartContextProvider = ({ children }) => {
  const [pet, setPet] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const setSelectedDatas = (val) => {
    if (selectedDatas.includes(val)) {
      return;
    }
    selectedDatas.push(val);
    setPet(selectedDatas);
    setCartCount(selectedDatas.length);
  };

  const clearAllData = () => {
    selectedDatas.splice(0, selectedDatas.length);
    setPet(selectedDatas);
    setCartCount(0);
  };
  const value = { pet, setSelectedDatas, cartCount, clearAllData };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
