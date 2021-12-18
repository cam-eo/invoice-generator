import React from 'react'
import './Invoice.css'

const invoiceItems = [
    {
        description: 'this is a description',
        quantity: 25,
        price: 17,
    }
];

function Invoice() {
    return (
        <div className='invoice'>
            <div className='invoice__innerContainer'>
                <div className='invoice__innerContainer__header'>
                    <span>Invoice</span>
                    <div className='invoice__innerContainer__header__infoContainer'>
                        <span>Cameron Wright</span>
                        <span>Eindhoven, Netherlands</span>
                        <span>5626AT</span>
                    </div>
                </div>
                <div className='invoice__innerContainer__subheader'>
                    <div className='invoice__innerContainer__subheader__leftContainer'>
                        <span>BILLED TO: </span>
                        <span>CloudSource, California</span>
                        <span>John Chase</span>
                    </div>
                    <div className='invoice__innerContainer__subheader__rightContainer'>
                        <span>INVOICE #</span>
                        <span>UPW1</span>
                        <span>PERIOD</span>
                        <span>12/12/2021 - 18/12/2021</span>
                        <span>INVOICE DUE DATE</span>
                        <span>18/12/2021</span>
                    </div>
                </div>
                <div className='invoice__innerContainer__invoiceContainer'>
                    <div className='invoice__innerContainer__invoiceHeader'>
                        <span className='invoice__innerContainer__columnItem'>ITEM #</span>
                        <span className='invoice__innerContainer__columnDescription'>DESCRIPTION</span>
                        <span className='invoice__innerContainer__columnQuantity'>QUANTITY</span>
                        <span className='invoice__innerContainer__columnPrice'>PRICE</span>
                        <span className='invoice__innerContainer__columnSubtotal'>SUBTOTAL</span>
                    </div>
                    {invoiceItems.map((invoiceItem, i) => 
                        <div className='invoice__innerContainer__invoiceItems'>
                            <span className='invoice__innerContainer__columnItem'>{i+1}</span>
                            <span className='invoice__innerContainer__columnDescription'>{invoiceItem.description}</span>
                            <span className='invoice__innerContainer__columnQuantity'>{invoiceItem.quantity}</span>
                            <span className='invoice__innerContainer__columnPrice'>{invoiceItem.price}</span>
                            <span className='invoice__innerContainer__columnSubtotal'>{invoiceItem.quantity * invoiceItem.price}</span>
                        </div>
                    )}
                </div>
                <div className='invoice__innerContainer__footer'>
                    <div className='invoice__innerContainer__footer__notesContainer'>
                        <div className='invoice__innerContainer__footer__notesContainer__notesTitle'>
                            <span>NOTES</span>
                        </div>
                        <div className='invoice__innerContainer__footer__notesContainer__notes'>
                            <span>This is a Note</span>
                        </div>
                    </div>
                    <div className='invoice__innerContainer__footer__notesContainer'>
                        <span>€</span>
                        <span>10000.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice
