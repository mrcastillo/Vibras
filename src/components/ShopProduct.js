import React from "react";

import candle from "../images/candle1.jpg";
import avatar from "../images/avatar.png";

const ShopProduct = () => {
    return (
        <div className={"shop-product-container"}>
            <div className={"homelanding-break"}></div>
            
            <div className={"shop-product-main"}>
                <div className={"shop-product-main-navi"}>
                    <span>Home - </span>
                    <span>Shop - </span>
                    <span>Soy Candle</span>
                </div>

                <div className={"shop-product-main-img"}>
                    <img src={candle} />
                </div>
                <div className={"shop-product-main-img-option"}>
                    - * * * * -
                </div>

                <div className={"shop-product-main-info"}>
                    <h1>Soy Candle</h1>
                    <p>Our original and most basic product.</p>
                    <p>Price: $10</p>

                    <button>Add To Cart</button>
                </div>
            </div>

            <div className={"shop-product-description"}>
                <h3>Add a little love to your living room.</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tempus pulvinar tempor. Nam placerat id nisi vitae volutpat. Phasellus iaculis pellentesque ipsum. Pellentesque sodales luctus libero, eu aliquet tortor luctus quis. Nullam pellentesque ut augue non ultrices. Aliquam fringilla sagittis magna quis consequat. Phasellus in interdum sapien, sit amet sodales nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla condimentum dui eu cursus faucibus. Vestibulum accumsan sed velit vitae feugiat. Nunc varius condimentum libero, vitae sagittis nisl pretium vel.
                </p>
            </div>

            <div className={"shop-product-reviews"}>
                <h3 id={"reviews"}>Reviews</h3>

                <div className={"shop-product-reviews-post"}>
                    <div className={"shop-product-reviews-post-user"}>
                        <h3>Karen</h3>
                        <div className={"shop-product-reviews-post-user-avatar"}>
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className={"shop-product-reviews-post-info"}>
                        <p id={"date"}>Posted: Febuary 14, 2020</p>
                        <h3 id={"subject"}>Love it!</h3>
                        <p id={"post"}>
                            Integer imperdiet libero ac diam vestibulum, ut convallis libero pellentesque. Donec porta purus eu lacus scelerisque pellentesque ac vitae leo.
                        </p>
                        
                    </div>
                    <div className={"shop-products-reviews-post-helpful"}>
                        <p>Like</p>
                    </div>
                </div>
                <hr style={{ "width": "100%" }} />
                

                <div className={"shop-product-reviews-post"}>
                    <div className={"shop-product-reviews-post-user"}>
                        <h3>Karen</h3>
                        <div className={"shop-product-reviews-post-user-avatar"}>
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className={"shop-product-reviews-post-info"}>
                       <p id={"date"}>Posted: Febuary 14, 2020</p>
                        <h3 id={"subject"}>Amazing Shop</h3>
                        <p id={"post"}>
                            Integer imperdiet libero ac diam vestibulum, ut convallis libero pellentesque. Donec porta purus eu lacus scelerisque pellentesque ac vitae leo.
                        </p>
                        
                    </div>
                    <div className={"shop-products-reviews-post-helpful"}>
                        <p>Like</p>
                    </div>
                </div>
                <hr style={{ "width": "100%" }} />

                <div className={"shop-product-reviews-post"}>
                    <div className={"shop-product-reviews-post-user"}>
                        <h3>Karen</h3>
                        <div className={"shop-product-reviews-post-user-avatar"}>
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className={"shop-product-reviews-post-info"}>
                       <p id={"date"}>Posted: Febuary 14, 2020</p>
                        <h3 id={"subject"}>Great Candle</h3>
                        <p id={"post"}>
                            Integer imperdiet libero ac diam vestibulum, ut convallis libero pellentesque. Donec porta purus eu lacus scelerisque pellentesque ac vitae leo.
                        </p>
                        
                    </div>
                    <div className={"shop-products-reviews-post-helpful"}>
                        <p>Like</p>
                    </div>
                </div>
                <hr style={{ "width": "100%" }} />

                <div className={"shop-product-reviews-post"}>
                    <div className={"shop-product-reviews-post-user"}>
                        <h3>Karen</h3>
                        <div className={"shop-product-reviews-post-user-avatar"}>
                            <img src={avatar} />
                        </div>
                    </div>
                    <div className={"shop-product-reviews-post-info"}>
                       <p id={"date"}>Posted: Febuary 14, 2020</p>
                        <h3 id={"subject"}>Must have!</h3>
                        <p id={"post"}>
                            Integer imperdiet libero ac diam vestibulum, ut convallis libero pellentesque. Donec porta purus eu lacus scelerisque pellentesque ac vitae leo.
                        </p>
                        
                    </div>
                    <div className={"shop-products-reviews-post-helpful"}>
                        <p>Like</p>
                    </div>
                </div>
                <hr style={{ "width": "100%" }} />

            </div>
        </div>
    )
};

export default ShopProduct;