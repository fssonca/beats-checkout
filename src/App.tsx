import Layout from "./app/components/layout";
import { useAppSelector } from "./app/context/hooks";
import SelectProduct from "./app/pages/selectProduct";
import DeliveryDetails from "./app/pages/deliveryDetails";
import PaymentInfo from "./app/pages/payment";

function App() {
  const state = useAppSelector((state) => state.checkout);

  const { orderPhase } = state;

  let Component = SelectProduct; // default to order page

  switch (orderPhase) {
    case "select-product":
      Component = SelectProduct;
      break;
    case "delivery-details":
      Component = DeliveryDetails;
      break;
    case "payment-info":
      Component = PaymentInfo;
      break;
    default:
  }

  return <Layout>{<Component />}</Layout>;
}

export default App;
