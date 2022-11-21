import create from "zustand";

interface StoreState {
  title: string;
  theme: string;

  updateTitle: (title: string) => void;
  updateTheme: (theme: string) => void;
}

const useStore = create<StoreState>((set) => ({
  title: "Portfolio",
  theme: "light",

  updateTitle: (newTitle: string) => set(() => ({ title: newTitle })),
  updateTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
}));

export default useStore;
