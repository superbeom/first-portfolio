import create from "zustand";

interface StoreState {
  title: string;
  theme: string;
  isMobile: boolean;

  updateTitle: (title: string) => void;
  updateTheme: (theme: string) => void;
  updateIsMobile: (state: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  title: "Portfolio",
  theme: "light",
  isMobile: false,

  updateTitle: (newTitle: string) => set(() => ({ title: newTitle })),
  updateTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
  updateIsMobile: (newState: boolean) => set(() => ({ isMobile: newState })),
}));

export default useStore;
