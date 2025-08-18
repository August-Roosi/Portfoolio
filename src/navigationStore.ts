import { create } from 'zustand';

interface NavigationState {
    isNavigating: boolean;
    setIsNavigating: (isNavigating: boolean) => void;
    to: string;
    from: string;
    direction: number;
    directionChanged: boolean;
    setDirection: (direction: number) => void;
    setDirectionChanged: (directionChanged: boolean) => void;
    setTo: (to: string) => void;
    setFrom: (from: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({

    isNavigating: false,
    setIsNavigating: (isNavigating: boolean) => {
        set({ isNavigating });

    },


    to: location.pathname,
    from: '/',
    direction: 0,
    directionChanged: false,

    setTo: (to: string) => set({ to }),
    setFrom: (from: string) => set({ from }),
    setDirectionChanged: (directionChanged: boolean) => set({ directionChanged}),
    setDirection: (direction: number) => {
        set((state) => {
            if (direction === state.direction) {
                return { directionChanged: false, direction: direction };
            } else {
                return { directionChanged: true, direction: direction };
            }
        });
    },
}));