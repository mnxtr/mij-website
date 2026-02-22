import { createContext, useContext, ReactNode, useEffect } from 'react';
import { useUIStore, Theme } from '../stores/uiStore';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const theme = useUIStore((state) => state.theme);
    const setTheme = useUIStore((state) => state.setTheme);
    const toggleTheme = useUIStore((state) => state.toggleTheme);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        root.style.colorScheme = theme;
    }, [theme]);

    // Listen for system theme changes if needed, but here we prioritize stored theme

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
