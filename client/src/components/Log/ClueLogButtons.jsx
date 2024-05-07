import "./ClueLogButtons.css";
import { Button, ButtonGroup } from "react-bootstrap";

import { clueLogActions } from "../../store/slices/clueLogSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ClueLogButtons({ className, buttons, filterType }) {
  const dispatch = useDispatch();
  let currentFilterValue;

  if (filterType === "log") {
    currentFilterValue = useSelector(
      (state) => state.clueLog.currentLogFilter
    );
  } else if (filterType === "broadcast") {
    currentFilterValue = useSelector(
      (state) => state.clueLog.currentLogFilter
    );
  } else if (filterType === "broadcastForm") {
    currentFilterValue = useSelector(
      (state) => state.clueLog.currentBroadcastFormFilter
    );
  }

  const classes = `${className} btn-group`;

  function handleClick(filterValue, filterType) {
    if (filterType === "log") {
      dispatch(clueLogActions.filterLog({ filterValue }));
    } else if (filterType === "broadcast")  {
      dispatch(clueLogActions.filterBroadcasts({ filterValue }));
    } else if (filterType === "broadcastForm") {
      dispatch(clueLogActions.filterBroadcastForm({ filterValue }));
    }
  }

  return (
    <ButtonGroup aria-label="Basic example" className={classes}>
      {buttons.map((buttonLabel) => {
        return (
          <Button
            key={buttonLabel}
            variant="secondary"
            onClick={() => handleClick(`${buttonLabel}`, filterType)}
            className={
              currentFilterValue === `${buttonLabel}`
                ? "btn-group selected"
                : "btn-group"
            }
          >
            {buttonLabel}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}
