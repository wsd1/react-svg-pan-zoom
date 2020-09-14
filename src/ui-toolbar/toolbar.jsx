import React from 'react';
import PropTypes from 'prop-types';
import {
  TOOL_AUTO, 
  //TOOL_PAN, TOOL_ZOOM_IN, TOOL_ZOOM_OUT, 
  TOOL_SELECT, TOOL_CUT,
  POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT,
  ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT, ALIGN_TOP, ALIGN_BOTTOM,
} from '../constants';

import {fitToViewer} from '../features/zoom';
import IconCursor from './icon-cursor';
//import IconPan from './icon-pan';
//import IconZoomIn from './icon-zoom-in';
//import IconZoomOut from './icon-zoom-out';
import IconFit from './icon-fit';
import IconSelect from './icon-select';
import IconSave from './icon-save';
import IconDelete from './icon-delete';
import IconBorder from './icon-border';
import IconCut from './icon-cut';
import IconRedo from './icon-redo';
import IconUndo from './icon-undo';
import IconHelp from './icon-help';
import ToolbarButton from './toolbar-button';
import ToolbarPadding from './toolbar-padding';

export default function Toolbar({tool, value, onChangeValue, onChangeTool, onSave, onUndo, onRedo, onDelete, onBorderSet, onHelp, activeToolColor, position, SVGAlignX, SVGAlignY}) {

  let handleChangeTool = (event, tool) => {
    onChangeTool(tool);
    event.stopPropagation();
    event.preventDefault();
  };

  let handleFit = event => {
    onChangeValue(fitToViewer(value, SVGAlignX, SVGAlignY));
    event.stopPropagation();
    event.preventDefault();
  };

  let handleSave = event => {
    onSave(tool, value);
    event.stopPropagation();
    event.preventDefault();
  };

  let handleUndo = event => {
    onUndo();
    event.stopPropagation();
    event.preventDefault();
  };

  let handleRedo = event => {
    onRedo();
    event.stopPropagation();
    event.preventDefault();
  };

  let handleDelete = event => {
    onDelete();
    event.stopPropagation();
    event.preventDefault();
  };
  

  let handleBorder = event => {
    onBorderSet(event);
    event.stopPropagation();
    event.preventDefault();
  };

  let handleHelp = event => {
    onHelp(event);
    event.stopPropagation();
    event.preventDefault();
  };

  let isHorizontal = [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0;

  let style = {
    //position
    position: "absolute",
    transform: [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0 ? "translate(-50%, 0px)" : "none",
    top: [POSITION_LEFT, POSITION_RIGHT, POSITION_TOP].indexOf(position) >= 0 ? "5px" : "unset",
    left: [POSITION_TOP, POSITION_BOTTOM].indexOf(position) >= 0 ? "50%" : (POSITION_LEFT === position ? "5px" : "unset"),
    right: [POSITION_RIGHT].indexOf(position) >= 0 ? "5px" : "unset",
    bottom: [POSITION_BOTTOM].indexOf(position) >= 0 ? "5px" : "unset",

    //inner styling
    backgroundColor: "rgba(19, 20, 22, 0.90)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: isHorizontal ? "row" : "column",
    padding: isHorizontal ? "1px 2px" : "2px 1px"
  };

  return (
    <div style={style} role="toolbar">

      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="save"
        title="save"
        onClick={ event => handleSave(event) }>
        <IconSave/>
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="fit-to-viewer"
        title="Fit to viewer"
        onClick={ event => handleFit(event) }>
        <IconFit/>
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="undo"
        title="undo"
        onClick={ event => handleUndo(event) }>
        <IconUndo/>
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="redo"
        title="redo"
        onClick={ event => handleRedo(event) }>
        <IconRedo/>
      </ToolbarButton>

      <ToolbarPadding toolbarPosition={position} />


      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_AUTO}
        activeColor={activeToolColor}
        name="unselect-tools"
        title="Auto"
        onClick={ event => handleChangeTool(event, TOOL_AUTO) }>
        <IconCursor/>
      </ToolbarButton>


      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_SELECT}
        activeColor={activeToolColor}
        name="select-tool-select"
        title="Select"
        onClick={ event => handleChangeTool(event, TOOL_SELECT) }>
        <IconSelect/>
      </ToolbarButton>

      <ToolbarPadding toolbarPosition={position} />

      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_CUT}
        activeColor={activeToolColor}
        name="break-line"
        title="break line"
        onClick={ event => handleChangeTool(event, TOOL_CUT) }>
        <IconCut/>
      </ToolbarButton>

      <ToolbarPadding toolbarPosition={position} />

      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="delete"
        title="delete"
        onClick={ event => handleDelete(event) }>
        <IconDelete/>
      </ToolbarButton>


      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="set border"
        title="set border"
        onClick={ event => handleBorder(event) }>
        <IconBorder/>
      </ToolbarButton>

      <ToolbarPadding toolbarPosition={position} />


      <ToolbarButton
        toolbarPosition={position}
        active={false}
        activeColor={activeToolColor}
        name="help"
        title="help"
        onClick={ event => handleHelp(event) }>
        <IconHelp/>
      </ToolbarButton>


    </div>
  )
}

/*



      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_PAN}
        activeColor={activeToolColor}
        name="select-tool-pan"
        title="Pan"
        onClick={ event => handleChangeTool(event, TOOL_PAN) }>
        <IconPan/>
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_ZOOM_IN}
        activeColor={activeToolColor}
        name="select-tool-zoom-in"
        title="Zoom in"
        onClick={ event => handleChangeTool(event, TOOL_ZOOM_IN) }>
        <IconZoomIn/>
      </ToolbarButton>

      <ToolbarButton
        toolbarPosition={position}
        active={tool === TOOL_ZOOM_OUT}
        activeColor={activeToolColor}
        name="select-tool-zoom-out"
        title="Zoom out"
        onClick={ event => handleChangeTool(event, TOOL_ZOOM_OUT) }>
        <IconZoomOut/>
      </ToolbarButton>

*/

Toolbar.propTypes = {
  tool: PropTypes.string.isRequired,
  onChangeTool: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  onChangeValue: PropTypes.func.isRequired,

  //customizations
  position: PropTypes.oneOf([POSITION_TOP, POSITION_RIGHT, POSITION_BOTTOM, POSITION_LEFT]),
  SVGAlignX: PropTypes.oneOf([ALIGN_CENTER, ALIGN_LEFT, ALIGN_RIGHT]),
  SVGAlignY: PropTypes.oneOf([ALIGN_CENTER, ALIGN_TOP, ALIGN_BOTTOM]),
  activeToolColor: PropTypes.string
};

Toolbar.defaultProps = {
  position: POSITION_RIGHT,
  SVGAlignX: ALIGN_LEFT,
  SVGAlignY: ALIGN_TOP,
  activeToolColor: '#1CA6FC'
};
