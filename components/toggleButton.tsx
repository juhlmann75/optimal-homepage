import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ToggleButton: React.FunctionComponent = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <div className="flex items-center justify-center m-4">
            <button
                type="button"
                aria-label="Light and Dark Mode Toggle Button"
                className="inline-flex items-center px-3 py-2 shadow-sm text-xs font-medium rounded hover:scale-110 duration-500"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
                {theme === 'light' ? '☀️' : '🌙'}
            </button>
        </div>
    );
};

export default ToggleButton;