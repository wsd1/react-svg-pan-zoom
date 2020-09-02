
import {
  ACTION_SELECT, 
  MODE_IDLE, 
  MODE_SELECTING,
} from '../constants';
import {getSVGPoint, set} from './common';
//import calculateBox from '../utils/calculateBox';


export function startSelecting(value, viewerX, viewerY) {
  //console.log(`REMOVEME: Select start: ${viewerX}, ${viewerY}`);
  return set(value, {
    mode: MODE_SELECTING,
    startX: viewerX,
    startY: viewerY,
    endX: viewerX,
    endY: viewerY
  });
}

export function updateSelecting(value, viewerX, viewerY) {
  if (value.mode !== MODE_SELECTING) throw new Error('update selection not allowed in this mode ' + value.mode);
  return set(value, {
    endX: viewerX,
    endY: viewerY
  });
}

export function stopSelecting(value, viewerX, viewerY, props) {
  const TOLERATED_DISTANCE = 7 //minimum distance to choose if area selection or drill down on point
  let {startX, startY} = value;

  let start = getSVGPoint(value, startX, startY);
  let end = getSVGPoint(value, viewerX, viewerY);

  if (Math.abs(startX - viewerX) > TOLERATED_DISTANCE && Math.abs(startY - viewerY) > TOLERATED_DISTANCE) {
    //let box = calculateBox(start, end);
    if(props.onSelect)
      props.onSelect([start.x, start.y], [end.x, end.y]);
    //console.log(`REMOVEME: Select end: ${start.x},${start.y} ${end.x},${end.y}`);
  }

  //console.log(`REMOVEME: Select end: [${value.startX}, ${value.startY}][${viewerX}, ${viewerY}]`);

  return set(value, {
    mode: MODE_IDLE,
    endX: viewerX,
    endY: viewerY
  }, ACTION_SELECT);

}

