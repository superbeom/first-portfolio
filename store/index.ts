import create from "zustand";

interface StoreState {
  title: string;
  theme: string;
  isMobile: boolean;
  isDesktop: boolean;

  updateTitle: (title: string) => void;
  updateTheme: (theme: string) => void;
  updateIsMobile: (state: boolean) => void;
  updateIsDesktop: (state: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  title: "Portfolio",
  theme: "light",
  isMobile: true,
  isDesktop: false,

  updateTitle: (newTitle: string) => set(() => ({ title: newTitle })),
  updateTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
  updateIsMobile: (newState: boolean) => set(() => ({ isMobile: newState })),
  updateIsDesktop: (newState: boolean) => set(() => ({ isDesktop: newState })),
}));

export default useStore;
