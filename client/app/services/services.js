import angular from 'angular';

import CNDUser from './cnd-user';
import CNDProduct from './cnd-product';


export default angular
  .module('app.services', [])
  .service({
    CNDUser,
    CNDProduct
  });
