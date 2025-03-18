/*
import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
    useEffect(() => {
        const handleRouteChange = (url) => {
            window.gtag('config', 'YOUR_GA_TRACKING_ID', {
                page_path: url,
            });
        };

        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
            dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', 'YOUR_GA_TRACKING_ID');

        // Listen for route changes
        const unlisten = history.listen((location) => {
            handleRouteChange(location.pathname);
        });

        return () => {
            unlisten();
        };
    }, []);

    return null;
};

export default GoogleAnalytics;
*/