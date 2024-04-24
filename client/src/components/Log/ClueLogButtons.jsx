import "./ClueLogButtons.css";
import { Button, ButtonGroup } from "react-bootstrap";

import { useQuery, useMutation } from "@tanstack/react-query";
import {queryClient} from '../../util/http';
import {getLog} from '../../util/log';

import { clueLogActions } from "../../store/slices/clueLogSlice"
import { useDispatch, useSelector } from "react-redux";

export default function ClueLogButtons({ className, buttons, filterType }) {
  const dispatch = useDispatch();
  const currentFilterValue =
    filterType === "tier"
      ? useSelector((state) => state.clueLog.currentTier)
      : useSelector((state) => state.clueLog.currentItem);

  const classes = `${className} btn-group`;

  function handleClick(filterValue, filterType) {
    dispatch(clueLogActions.filter({filterValue, filterType}));
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
