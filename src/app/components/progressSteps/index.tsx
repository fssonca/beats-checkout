import "./style.scss";
import { useAppSelector, useAppDispatch } from "../../context/hooks";
import { changeOrderPhase } from "../../context/reducer";

export default function ProgressSteps() {
  const { orderPhase } = useAppSelector((state) => state.checkout);

  console.log("orderPhase", orderPhase);

  const dispatch = useAppDispatch();

  return (
    <div className="container-progress" data-testid="progress-steps">
      <div className="step-button" onClick={() => dispatch(changeOrderPhase("select-product"))}>
        1
      </div>

      <div className="step-button" onClick={() => dispatch(changeOrderPhase("delivery-details"))}>
        2
      </div>

      <div className="step-button" onClick={() => dispatch(changeOrderPhase("payment-info"))}>
        3
      </div>
    </div>
  );
}
