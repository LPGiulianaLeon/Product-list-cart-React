export default function Dessert({dessert, addToCart}) {



    return (
        <div className="card">
            <img src={dessert.image.desktop} alt="Waffle with Berries" className="card-img" />
            <div className="card-body">
                <h5 className="card-title">{dessert.name}</h5>
                <p className="card-price">${dessert.price.toFixed(2)}</p>
                <button 
                    type="button" 
                    className="btn"
                    onClick={() => addToCart(dessert)}
                >Add to Cart</button>
            </div>
        </div>
    )
}