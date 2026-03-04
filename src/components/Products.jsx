
import { useTranslation } from 'react-i18next';

const Products = () => {
    const { t } = useTranslation();
    return (
        <section className="products" id="products">
            <div className="container">
                <div className="section-header">
                    <h2>{t('products.title1', 'Our')} <span>{t('products.title2', 'Playground ')}</span>{t('products.title3', 'Worlds')}</h2>
                    <p>{t('products.intro', 'Discover our unique wooden structures.')}</p>
                </div>

                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1721047622096-a481d0175827?q=80&w=2340&auto=format&fit=crop&w=600&q=80" alt="Treehouse" />
                            <div className="product-overlay">
                                <span>{t('products.details', 'View Details')}</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{t('products.treehouses', 'Treehouses & Towers')}</h3>
                            <p>{t('products.robinia', 'Robinia wood structures')}</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80" alt="Slide" />
                            <div className="product-overlay">
                                <span>{t('products.details', 'View Details')}</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{t('products.slides', 'Slides & Swings')}</h3>
                            <p>{t('products.natural', 'Natural adventure')}</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=600&q=80" alt="Climbing" />
                            <div className="product-overlay">
                                <span>{t('products.details', 'View Details')}</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{t('products.climbing', 'Climbing Structures')}</h3>
                            <p>{t('products.artistic', 'Artistic designs')}</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1636044399257-e820cc11ebaa?q=80&w=2340&auto=format&fit=crop&w=600&q=80" alt="Treehouse" />
                            <div className="product-overlay">
                                <span>{t('products.details', 'View Details')}</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{t('products.treehouses', 'Treehouses & Towers')}</h3>
                            <p>{t('products.robinia', 'Robinia wood structures')}</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1767943211959-e30579f0bc4a?auto=format&fit=crop&w=600&q=80" alt="Slide" />
                            <div className="product-overlay">
                                <span>{t('products.details', 'View Details')}</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{t('products.slides', 'Slides & Swings')}</h3>
                            <p>{t('products.natural', 'Natural adventure')}</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1707013269128-0cdc68cb8d42?auto=format&fit=crop&w=600&q=80" alt="Climbing" />
                            <div className="product-overlay">
                                <span>{t('products.details', 'View Details')}</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>{t('products.wood', 'Wood Structures')}</h3>
                            <p>{t('products.artistic', 'Artistic designs')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;