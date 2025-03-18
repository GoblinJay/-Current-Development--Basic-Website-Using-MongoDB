import { useEffect } from 'react';

const useAnalytics = () => {
    useEffect(() => {
        // Initialize Google Analytics
        const handleAnalytics = () => {
            // Your Google Analytics tracking code here
            console.log('Google Analytics initialized');
        };

        handleAnalytics();

        // Initialize Hotjar
        const handleHotjar = () => {
            // Your Hotjar tracking code here
            console.log('Hotjar initialized');
        };

        handleHotjar();
    }, []);

    return null; // This hook does not render anything
};

export default useAnalytics;