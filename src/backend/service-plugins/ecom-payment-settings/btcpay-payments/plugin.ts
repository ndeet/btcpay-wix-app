import { paymentSettings } from '@wix/ecom/service-plugins';
import {OrderPaymentRequest} from "@wix/ecom/type-bundles";



paymentSettings.provideHandlers({
  getPaymentSettings: async ({ request, metadata }) => {
    return {
      paymentSettings: {},
    };
  },
});
