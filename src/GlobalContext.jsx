import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const GlobalContext = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModelOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModel = () => {
    setIsModalOpen(true);
  };
  const closeModel = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isModelOpen,
        openSidebar,
        closeSidebar,
        openModel,
        closeModel,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export const useGlobalContext= ()=>{
  return useContext(AppContext)
}