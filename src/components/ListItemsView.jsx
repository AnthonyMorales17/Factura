import PropTypes from "prop-types"
import { RowItemView } from "./RowItemView"

export const ListItemsView = ({titulo, items, onBorrarItem}) => {
    return (
        <>
        <h1>{titulo}</h1>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Productos</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id, product, price, quantity}) => (
                        <RowItemView 
                            key={id} id = {id} product = {product} price = {price} quantity = {quantity} onBorrarItem = {onBorrarItem}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}
ListItemsView.propTypes = {
    titulo: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
}