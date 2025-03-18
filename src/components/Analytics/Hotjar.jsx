import React, { useEffect } from 'react';

const Hotjar = () => {
    useEffect(() => {
        // Initialize Hotjar tracking
        const hotjarId = 'YOUR_HOTJAR_ID'; // Replace with your Hotjar ID
        const hotjarVersion = 6; // Replace with your Hotjar version

        if (typeof window !== 'undefined') {
            window.hj = window.hj || function() {
                (window.hj.q = window.hj.q || []).push(arguments);
            };
            window._hjSettings = {
                hjid: hotjarId,
                hjsv: hotjarVersion
            };

            const script = document.createElement('script');
            script.async = 1;
            script.src = `https://static.hotjar.com/c/hotjar-${hotjarId}.js?sv=${hotjarVersion}`;
            document.head.appendChild(script);
        }
    }, []);

    return null; // This component does not render anything
};

export default Hotjar;