const Products = () => {    
    return (
        <section className="products" id="products">
            <div className="container">
                <div className="section-header">
                    <h2>Our <span>Playground </span>Worlds</h2>
                    <p>Discover our unique wooden structures.</p>
                </div>

                <div className="product-grid">
                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1721047622096-a481d0175827?q=80&w=2340&auto=format&fit=crop&w=600&q=80"
                                alt="Treehouse" />
                            <div className="product-overlay">
                                <span>View Details</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>Treehouses & Towers</h3>
                            <p>Robinia wood structures</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80"
                                alt="Slide" />
                            <div className="product-overlay">
                                <span>View Details</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>Slides & Swings</h3>
                            <p>Natural adventure</p>
                        </div>
                    </div>

                    <div className="product-card">
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=600&q=80"
                                alt="Climbing" />
                            <div className="product-overlay">
                                <span>View Details</span>
                            </div>
                        </div>
                        <div className="product-info">
                            <h3>Climbing Structures</h3>
                            <p>Artistic designs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;