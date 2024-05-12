import "./FilterTierButtons.css";
import { Button, ButtonGroup } from "react-bootstrap";

import { myLogsActions } from "../../store/slices/myLogsSlice";
import { broadcastFormActions } from "../../store/slices/broadcastFormSlice";
import { myBroadcastsActions } from "../../store/slices/myBroadcastsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function filterTierButtons({ className, buttons, filterType }) {
  const dispatch = useDispatch();
  let currentFilterValue;

  if (filterType === "log") {
    currentFilterValue = useSelector((state) => state.myLogs.currentLogFilter);
  } else if (filterType === "broadcast") {
    currentFilterValue = useSelector((state) => state.myBroadcasts.currentLogFilter);
  } else if (filterType === "broadcastForm") {
    currentFilterValue = useSelector(
      (state) => state.broadcastForm.currentBroadcastFormFilter
    );
  }

  const classes = `${className} btn-group`;

  function handleClick(filterValue, filterType) {
    if (filterType === "log") {
      dispatch(myLogsActions.filterLog({ filterValue }));
    } else if (filterType === "broadcast") {
      dispatch(myBroadcastsActions.filterBroadcasts({ filterValue }));
    } else if (filterType === "broadcastForm") {
      dispatch(broadcastFormActions.filterBroadcastForm({ filterValue }));
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
