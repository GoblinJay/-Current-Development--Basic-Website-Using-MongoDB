import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => {
    return (
        <Helmet>
            <title>Your Page Title</title>
            <meta name="description" content="A brief description of your page for SEO." />
            <meta name="keywords" content="keyword1, keyword2, keyword3" />
            <meta name="author" content="Your Name" />
            <link rel="canonical" href="https://www.yourwebsite.com" />
            <meta property="og:title" content="Your Page Title" />
            <meta property="og:description" content="A brief description of your page for SEO." />
            <meta property="og:url" content="https://www.yourwebsite.com" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://www.yourwebsite.com/image.jpg" />
        </Helmet>
    );
};

export default SEO;