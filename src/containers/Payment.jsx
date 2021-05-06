import React from 'react';
import '../styles/containers/Payment.scss';

const Payment = () => (
  <div className="Payment">
    <div className="Payment-content">
      <h3>Resumen del pedido:</h3>
      <div className="Payment-button">
        Boton de pago con Paypal
      </div>
    </div>
  </div>
);

export default Payment;
