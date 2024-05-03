import "./ClueLogButtons.css";
import { Button, ButtonGroup } from "react-bootstrap";

import { clueLogActions } from "../../store/slices/clueLogSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ClueLogButtons({ className, buttons, filterType }) {
  const dispatch = useDispatch();
  const currentFilterValue =
    filterType === "log"
      ? useSelector((state) => state.clueLog.currentLogFilter)
      : useSelector((state) => state.clueLog.currentBroadcastFilter);
    console.log(currentFilterValue);

  const classes = `${className} btn-group`;

  function handleClick(filterValue, filterType) {
    if(filterType === "log"){
      dispatch(clueLogActions.filterLog({ filterValue }));
    } else {
      dispatch(clueLogActions.filterBroadcasts({ filterValue }));

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
