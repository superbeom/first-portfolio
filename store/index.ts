import create from "zustand";

interface StoreState {
  theme: string;
  isMobile: boolean;
  isDesktop: boolean;

  updateTheme: (theme: string) => void;
  updateIsMobile: (state: boolean) => void;
  updateIsDesktop: (state: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  theme: "light",
  isMobile: true,
  isDesktop: false,

  updateTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
  updateIsMobile: (newState: boolean) => set(() => ({ isMobile: newState })),
  updateIsDesktop: (newState: boolean) => set(() => ({ isDesktop: newState })),
}));

export default useStore;
