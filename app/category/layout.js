import Footer from '@/components/Footer';
import Subscribe from '@/components/Subscribe';
import CategoryHero from '@/components/category/CategoryHero';
import CategoryLIst from '@/components/category/CategoryLIst';
import React from 'react';
import data from '@/data/productData.json'

const layout = () => {
    return (
        <div>
            <CategoryHero/>
            <CategoryLIst data={data}/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default layout;