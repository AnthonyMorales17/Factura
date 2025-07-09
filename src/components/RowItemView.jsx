import PropTypes from "prop-types"

export const RowItemView = ({id, product, price, quantity, onBorrarItem}) => {
    return (
        <>
            <tr key={id}>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td><><button className="btn btn-danger btn-sm" onClick={() => onBorrarItem(id)}>Eliminar</button></></td>
            </tr>
        </>
    )
}
RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}