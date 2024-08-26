import "./ShirtCard.css"
export default function ShirtCard({ src, number ,addtocart,preview }) {
    return (
        <div className="shirt-card">
            <div className="shirt-image-container">
                <img className="shirt-image" src={src}  alt="Shirt" />
            </div>
            <div className="carddetails">
            <div className="shirt-info">
                    <h3 className="shirt-number">{number}</h3>
                <span className="shirt-price">$100</span>

            </div>
            <div className="shirt-footer">
            <button className="add-to-cart-btn" onClick={(e)=>{addtocart()}}>ADD TO CART</button>
                <button className="preview-btn" onClick={(e)=>{preview()}}>PREVIEW</button>
            </div>
            </div>
        </div>
    );
}
