//

// export * from '@material-ui/core';
// //
// // import * as MaterialUI from '@material-ui/core';
// //
// // export type TypeMui = typeof MaterialUI;
//
// // export * as React from 'react';

export {CSSProperties} from '@material-ui/styles/withStyles';
export type IStyleSheetObject = CSSProperties;

export interface IMuiViewProps {
	className?: string;
	style?: IStyleSheetObject;
}


// From index.js
import * as colors from '@material-ui/core/colors';
import {StyledComponentProps} from '@material-ui/core/styles';
import {Omit} from '@material-ui/types';
import * as React from 'react';

export {StyledComponentProps};

/**
 * @deprecated
 * Import from `@material-ui/types` instead
 *
 * TODO: to remove in v5
 */
export {Omit};

/**
 * All standard components exposed by `material-ui` are `StyledComponents` with
 * certain `classes`, on which one can also set a top-level `className` and inline
 * `style`.
 */
export type StandardProps<C, ClassKey extends string, Removals extends keyof C = never> = Omit<C,
	'classes' | Removals> &
	StyledComponentProps<ClassKey> & {
	className?: string;
	ref?: C extends { ref?: infer RefType } ? RefType : React.Ref<unknown>;
	style?: React.CSSProperties;
};

export type PaletteType = 'light' | 'dark';

export interface Color {
	50: string;
	100: string;
	200: string;
	300: string;
	400: string;
	500: string;
	600: string;
	700: string;
	800: string;
	900: string;
	A100: string;
	A200: string;
	A400: string;
	A700: string;
}

export namespace MuiPropTypes {
	type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
	type Color = 'inherit' | 'primary' | 'secondary' | 'default';
	type Margin = 'none' | 'dense' | 'normal';
}
export namespace PropTypes {
	type Alignment = 'inherit' | 'left' | 'center' | 'right' | 'justify';
	type Color = 'inherit' | 'primary' | 'secondary' | 'default';
	type Margin = 'none' | 'dense' | 'normal';
}

export {colors};
export * from '@material-ui/core/styles';

export * from '@material-ui/core/utils';

export {default as Accordion} from '@material-ui/core/Accordion';
export * from '@material-ui/core/Accordion';

export {default as AccordionActions} from '@material-ui/core/AccordionActions';
export * from '@material-ui/core/AccordionActions';

export {default as AccordionDetails} from '@material-ui/core/AccordionDetails';
export * from '@material-ui/core/AccordionDetails';

export {default as AccordionSummary} from '@material-ui/core/AccordionSummary';
export * from '@material-ui/core/AccordionSummary';

export {default as AppBar} from '@material-ui/core/AppBar';
export * from '@material-ui/core/AppBar';

export {default as Avatar} from '@material-ui/core/Avatar';
export * from '@material-ui/core/Avatar';

export {default as Backdrop} from '@material-ui/core/Backdrop';
export * from '@material-ui/core/Backdrop';

export {default as Badge} from '@material-ui/core/Badge';
export * from '@material-ui/core/Badge';

export {default as BottomNavigation} from '@material-ui/core/BottomNavigation';
export * from '@material-ui/core/BottomNavigation';

export {default as BottomNavigationAction} from '@material-ui/core/BottomNavigationAction';
export * from '@material-ui/core/BottomNavigationAction';

export {default as Box} from '@material-ui/core/Box';
export * from '@material-ui/core/Box';

export {default as Breadcrumbs} from '@material-ui/core/Breadcrumbs';
export * from '@material-ui/core/Breadcrumbs';

export {default as Button} from '@material-ui/core/Button';
export * from '@material-ui/core/Button';

export {default as ButtonBase} from '@material-ui/core/ButtonBase';
export * from '@material-ui/core/ButtonBase';

export {default as ButtonGroup} from '@material-ui/core/ButtonGroup';
export * from '@material-ui/core/ButtonGroup';

export {default as Card} from '@material-ui/core/Card';
export * from '@material-ui/core/Card';

export {default as CardActionArea} from '@material-ui/core/CardActionArea';
export * from '@material-ui/core/CardActionArea';

export {default as CardActions} from '@material-ui/core/CardActions';
export * from '@material-ui/core/CardActions';

export {default as CardContent} from '@material-ui/core/CardContent';
export * from '@material-ui/core/CardContent';

export {default as CardHeader} from '@material-ui/core/CardHeader';
export * from '@material-ui/core/CardHeader';

export {default as CardMedia} from '@material-ui/core/CardMedia';
export * from '@material-ui/core/CardMedia';

export {default as Checkbox} from '@material-ui/core/Checkbox';
export * from '@material-ui/core/Checkbox';

export {default as Chip} from '@material-ui/core/Chip';
export * from '@material-ui/core/Chip';

export {default as CircularProgress} from '@material-ui/core/CircularProgress';
export * from '@material-ui/core/CircularProgress';

export {default as ClickAwayListener} from '@material-ui/core/ClickAwayListener';
export * from '@material-ui/core/ClickAwayListener';

export {default as Collapse} from '@material-ui/core/Collapse';
export * from '@material-ui/core/Collapse';

export {default as Container} from '@material-ui/core/Container';
export * from '@material-ui/core/Container';

export {default as CssBaseline} from '@material-ui/core/CssBaseline';
export * from '@material-ui/core/CssBaseline';

export {default as Dialog} from '@material-ui/core/Dialog';
export * from '@material-ui/core/Dialog';

export {default as DialogActions} from '@material-ui/core/DialogActions';
export * from '@material-ui/core/DialogActions';

export {default as DialogContent} from '@material-ui/core/DialogContent';
export * from '@material-ui/core/DialogContent';

export {default as DialogContentText} from '@material-ui/core/DialogContentText';
export * from '@material-ui/core/DialogContentText';

export {default as DialogTitle} from '@material-ui/core/DialogTitle';
export * from '@material-ui/core/DialogTitle';

export {default as Divider} from '@material-ui/core/Divider';
export * from '@material-ui/core/Divider';

export {default as Drawer} from '@material-ui/core/Drawer';
export * from '@material-ui/core/Drawer';

export {default as ExpansionPanel} from '@material-ui/core/ExpansionPanel';
export * from '@material-ui/core/ExpansionPanel';

export {default as ExpansionPanelActions} from '@material-ui/core/ExpansionPanelActions';
export * from '@material-ui/core/ExpansionPanelActions';

export {default as ExpansionPanelDetails} from '@material-ui/core/ExpansionPanelDetails';
export * from '@material-ui/core/ExpansionPanelDetails';

export {default as ExpansionPanelSummary} from '@material-ui/core/ExpansionPanelSummary';
export * from '@material-ui/core/ExpansionPanelSummary';

export {default as Fab} from '@material-ui/core/Fab';
export * from '@material-ui/core/Fab';

export {default as Fade} from '@material-ui/core/Fade';
export * from '@material-ui/core/Fade';

export {default as FilledInput} from '@material-ui/core/FilledInput';
export * from '@material-ui/core/FilledInput';

export {default as FormControl} from '@material-ui/core/FormControl';
export * from '@material-ui/core/FormControl';

export {default as FormControlLabel} from '@material-ui/core/FormControlLabel';
export * from '@material-ui/core/FormControlLabel';

export {default as FormGroup} from '@material-ui/core/FormGroup';
export * from '@material-ui/core/FormGroup';

export {default as FormHelperText} from '@material-ui/core/FormHelperText';
export * from '@material-ui/core/FormHelperText';

export {default as FormLabel} from '@material-ui/core/FormLabel';
export * from '@material-ui/core/FormLabel';

export {default as Grid} from '@material-ui/core/Grid';
export * from '@material-ui/core/Grid';

export {default as GridList} from '@material-ui/core/GridList';
export * from '@material-ui/core/GridList';

export {default as GridListTile} from '@material-ui/core/GridListTile';
export * from '@material-ui/core/GridListTile';

export {default as GridListTileBar} from '@material-ui/core/GridListTileBar';
export * from '@material-ui/core/GridListTileBar';

export {default as Grow} from '@material-ui/core/Grow';
export * from '@material-ui/core/Grow';

export {default as Hidden} from '@material-ui/core/Hidden';
export * from '@material-ui/core/Hidden';

export {default as Icon} from '@material-ui/core/Icon';
export * from '@material-ui/core/Icon';

export {default as IconButton} from '@material-ui/core/IconButton';
export * from '@material-ui/core/IconButton';

export {default as Input} from '@material-ui/core/Input';
export * from '@material-ui/core/Input';

export {default as InputAdornment} from '@material-ui/core/InputAdornment';
export * from '@material-ui/core/InputAdornment';

export {default as InputBase} from '@material-ui/core/InputBase';
export * from '@material-ui/core/InputBase';

export {default as InputLabel} from '@material-ui/core/InputLabel';
export * from '@material-ui/core/InputLabel';

export {default as LinearProgress} from '@material-ui/core/LinearProgress';
export * from '@material-ui/core/LinearProgress';

export {default as Link} from '@material-ui/core/Link';
export * from '@material-ui/core/Link';

export {default as List} from '@material-ui/core/List';
export * from '@material-ui/core/List';

export {default as ListItem} from '@material-ui/core/ListItem';
export * from '@material-ui/core/ListItem';

export {default as ListItemAvatar} from '@material-ui/core/ListItemAvatar';
export * from '@material-ui/core/ListItemAvatar';

export {default as ListItemIcon} from '@material-ui/core/ListItemIcon';
export * from '@material-ui/core/ListItemIcon';

export {default as ListItemSecondaryAction} from '@material-ui/core/ListItemSecondaryAction';
export * from '@material-ui/core/ListItemSecondaryAction';

export {default as ListItemText} from '@material-ui/core/ListItemText';
export * from '@material-ui/core/ListItemText';

export {default as ListSubheader} from '@material-ui/core/ListSubheader';
export * from '@material-ui/core/ListSubheader';

export {default as Menu} from '@material-ui/core/Menu';
export * from '@material-ui/core/Menu';

export {default as MenuItem} from '@material-ui/core/MenuItem';
export * from '@material-ui/core/MenuItem';

export {default as MenuList} from '@material-ui/core/MenuList';
export * from '@material-ui/core/MenuList';

export {default as MobileStepper} from '@material-ui/core/MobileStepper';
export * from '@material-ui/core/MobileStepper';

export {default as Modal} from '@material-ui/core/Modal';
export * from '@material-ui/core/Modal';

export {default as NativeSelect} from '@material-ui/core/NativeSelect';
export * from '@material-ui/core/NativeSelect';

export {default as NoSsr} from '@material-ui/core/NoSsr';
export * from '@material-ui/core/NoSsr';

export {default as OutlinedInput} from '@material-ui/core/OutlinedInput';
export * from '@material-ui/core/OutlinedInput';

export {default as Paper} from '@material-ui/core/Paper';
export * from '@material-ui/core/Paper';

export {default as Popover} from '@material-ui/core/Popover';
export * from '@material-ui/core/Popover';

export {default as Popper} from '@material-ui/core/Popper';
export * from '@material-ui/core/Popper';

export {default as Portal} from '@material-ui/core/Portal';
export * from '@material-ui/core/Portal';

export {default as Radio} from '@material-ui/core/Radio';
export * from '@material-ui/core/Radio';

export {default as RadioGroup} from '@material-ui/core/RadioGroup';
export * from '@material-ui/core/RadioGroup';

export {default as RootRef} from '@material-ui/core/RootRef';
export * from '@material-ui/core/RootRef';

export {default as Select} from '@material-ui/core/Select';
export * from '@material-ui/core/Select';

export {default as Slide} from '@material-ui/core/Slide';
export * from '@material-ui/core/Slide';

export {default as Slider} from '@material-ui/core/Slider';
export * from '@material-ui/core/Slider';

export {default as Snackbar} from '@material-ui/core/Snackbar';
export * from '@material-ui/core/Snackbar';

export {default as SnackbarContent} from '@material-ui/core/SnackbarContent';
export * from '@material-ui/core/SnackbarContent';

export {default as Step} from '@material-ui/core/Step';
export * from '@material-ui/core/Step';

export {default as StepButton} from '@material-ui/core/StepButton';
export * from '@material-ui/core/StepButton';

export {default as StepConnector} from '@material-ui/core/StepConnector';
export * from '@material-ui/core/StepConnector';

export {default as StepContent} from '@material-ui/core/StepContent';
export * from '@material-ui/core/StepContent';

export {default as StepIcon} from '@material-ui/core/StepIcon';
export * from '@material-ui/core/StepIcon';

export {default as StepLabel} from '@material-ui/core/StepLabel';
export * from '@material-ui/core/StepLabel';

export {default as Stepper} from '@material-ui/core/Stepper';
export * from '@material-ui/core/Stepper';

export {default as SvgIcon} from '@material-ui/core/SvgIcon';
export * from '@material-ui/core/SvgIcon';

export {default as SwipeableDrawer} from '@material-ui/core/SwipeableDrawer';
export * from '@material-ui/core/SwipeableDrawer';

export {default as Switch} from '@material-ui/core/Switch';
export * from '@material-ui/core/Switch';

export {default as Tab} from '@material-ui/core/Tab';
export * from '@material-ui/core/Tab';

export {default as Table} from '@material-ui/core/Table';
export * from '@material-ui/core/Table';

export {default as TableBody} from '@material-ui/core/TableBody';
export * from '@material-ui/core/TableBody';

export {default as TableCell} from '@material-ui/core/TableCell';
export * from '@material-ui/core/TableCell';

export {default as TableContainer} from '@material-ui/core/TableContainer';
export * from '@material-ui/core/TableContainer';

export {default as TableFooter} from '@material-ui/core/TableFooter';
export * from '@material-ui/core/TableFooter';

export {default as TableHead} from '@material-ui/core/TableHead';
export * from '@material-ui/core/TableHead';

export {default as TablePagination} from '@material-ui/core/TablePagination';
export * from '@material-ui/core/TablePagination';

export {default as TableRow} from '@material-ui/core/TableRow';
export * from '@material-ui/core/TableRow';

export {default as TableSortLabel} from '@material-ui/core/TableSortLabel';
export * from '@material-ui/core/TableSortLabel';

export {default as Tabs} from '@material-ui/core/Tabs';
export * from '@material-ui/core/Tabs';

export {default as TabScrollButton} from '@material-ui/core/TabScrollButton';
export * from '@material-ui/core/TabScrollButton';

export {default as TextField} from '@material-ui/core/TextField';
export * from '@material-ui/core/TextField';

export {default as TextareaAutosize} from '@material-ui/core/TextareaAutosize';
export * from '@material-ui/core/TextareaAutosize';

export {default as Toolbar} from '@material-ui/core/Toolbar';
export * from '@material-ui/core/Toolbar';

export {default as Tooltip} from '@material-ui/core/Tooltip';
export * from '@material-ui/core/Tooltip';

export {default as Typography} from '@material-ui/core/Typography';
export * from '@material-ui/core/Typography';

export {default as Unstable_TrapFocus} from '@material-ui/core/Unstable_TrapFocus';
export * from '@material-ui/core/Unstable_TrapFocus';

export {default as useMediaQuery} from '@material-ui/core/useMediaQuery';
export * from '@material-ui/core/useMediaQuery';

export {default as useScrollTrigger} from '@material-ui/core/useScrollTrigger';
export * from '@material-ui/core/useScrollTrigger';

export {default as withMobileDialog} from '@material-ui/core/withMobileDialog';
export * from '@material-ui/core/withMobileDialog';

export {default as withWidth} from '@material-ui/core/withWidth';
export * from '@material-ui/core/withWidth';

export {default as Zoom} from '@material-ui/core/Zoom';
export * from '@material-ui/core/Zoom';
