import { notifications } from '@order/controllers/notification/get';
import { intent, order } from '@order/controllers/orders/create';
import { buyerOrders, orderId, sellerOrders } from '@order/controllers/orders/get';
import { buyerApproveOrder, cancel, deliverOrder, deliveryDate, requestExtension } from '@order/controllers/orders/update';
import { markNotificationAsRead } from '@order/utils/notification.util';
import express, { Router } from 'express';

const router: Router = express.Router();

const orderRoutes = (): Router => {
  router.get('/notification/:userTo', notifications);
  router.get('/:orderId', orderId);
  router.get('/seller/:sellerId', sellerOrders);
  router.get('/buyer/:buyerId', buyerOrders);
  router.post('/', order);
  router.post('/create-payment-intent', intent);
  router.put('/cancel/:orderId', cancel);
  router.put('/extension/:orderId', requestExtension);
  router.put('/deliver-order/:orderId', deliverOrder);
  router.put('/approve-order/:orderId', buyerApproveOrder);
  router.put('/gig/:type/:orderId', deliveryDate);
  router.put('/notification/mark-as-read', markNotificationAsRead);

  return router;
};

export { orderRoutes };
