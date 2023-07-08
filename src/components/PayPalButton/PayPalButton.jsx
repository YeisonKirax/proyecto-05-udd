import {
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect } from "react";

// This values are the props in the UI
const amount = "2";
const style = { "layout": "vertical" };

// Custom component to wrap the PayPalButtons and handle currency changes
export const PayPalButton = ( { currency, showSpinner, products, setOrderId, setSuccessPayment } ) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [ { options, isPending }, dispatch ] = usePayPalScriptReducer();

  useEffect( () => {
    dispatch( {
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    } );
  }, [ currency, showSpinner ] );

  return ( <>
    { ( showSpinner && isPending ) && <div className="spinner" /> }
    <PayPalButtons
      style={ style }
      disabled={ false }
      forceReRender={ [ amount, currency, style ] }
      fundingSource={ undefined }
      createOrder={ ( data, actions ) => {
        console.log( products );
        const items = products.map( product => {
          return {
            amount: {
              description: product.title,
              currency_code: "USD",
              value: Number( product.price * product.quantity ).toString(),
            },
            reference_id: product._id
          }
        } )
        return actions.order
          .create( {
            purchase_units: items,
            application_context: {
              shipping_preference: "NO_SHIPPING"
            }
          } )
          .then( ( orderId ) => {
            // Your code here after create the order
            console.log( "orderId: ", orderId )
            setOrderId( orderId )
            return orderId;
          } );
      } }
      onApprove={ function ( data, actions ) {
        return actions.order.capture().then( function () {
          // Your code here after capture the order
          console.log( "Order capture" );
          setSuccessPayment( true )
        } );
      } }
    />
  </>
  );
}