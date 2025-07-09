import { getInvoice } from './services/getInvoice';
import { ClientView } from "./components/ClientView";
import { InvoiceView } from "./components/InvoiceView";
import { CompanyView } from "./components/CompanyView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from './components/TotalView';
import { useState } from 'react';

//tarea1:
//completar datos del cliente y compania en FacturaApp.jsx
//Tarea 2:
//Completar el Clienteview.jsx, CompanyView.jsx, ListItemsView.jsx
export const FacturaApp = () => {
    const {id, name, client, company, items:itemInicial} = getInvoice(); //Desestructurar getInvoice.
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [quantityValue, setQuantityValue] = useState('');
    const [items, setItems] = useState(itemInicial);
    const [counter, setCounter] = useState(4); //Valor predefinido 4.
    //funciones
    const onProductChange=({target}) => {
        console.log(target.value); 
        setProductValue(target.value);
    }

    const onPriceChange=({target}) => {
        console.log(target.value);
        setPriceValue(target.value);
    }

    const onQuantityChange=({target}) => {
        console.log(target.value)
        setQuantityValue(target.value);
    }

    const onInvoiceItemsSubmit = (event) => {
        event.preventDefault(); // Evitar recarga del formulario
        setItems([
            ...items, 
            {
            id: counter, 
            product: productValue.trim(),
            price: priceValue,
            quantity: parseInt(quantityValue, 10) 
            }
        ]);
        setProductValue('');
        setPriceValue('');
        setQuantityValue('');
        setCounter(counter + 1);
    }

    const total = items.reduce((acc, item) => acc + item.price*item.quantity, 0);
    const manejarBorrado = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <>
            <div className="container">
                <div className="card-header">Factura</div>
                <div className="card-body">
                    <InvoiceView id={id} name = {name} />
                    <div className="row my-3">
                        <div className="col">
                            <ClientView titulo = {'Datos del Cliente'} client = {client}/>
                        </div>
                        <div className="col">
                            <CompanyView titulo = {'Compania'} company = {company} />
                        </div>
                    </div>
                    <ListItemsView titulo={'Productos de la factura'} items={items} onBorrarItem = {manejarBorrado} />
                    <TotalView total = {total}/>
                    <>
                    <form action="" className='w-50' onSubmit={onInvoiceItemsSubmit}>
                        <input name='product' value={productValue} type="text" placeholder='Producto' className='form-control m-3' onChange={onProductChange}/>
                        <input name='price' value={priceValue} type="text" placeholder='Precio' className='form-control m-3' onChange={onPriceChange}/>
                        <input name='quantity' value={quantityValue} type="text" placeholder='Cantidad' className='form-control m-3' onChange={onQuantityChange} />
                        <button type="submit" className='btn btn-primary m-3'>Nuevo Item</button>
                    </form>
                    </>
                </div>
            </div>
        </>
    )
}