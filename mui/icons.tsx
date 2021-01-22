//

import {ButtonEventHandler, React} from '../index';
import {Icon, IconButton, IMuiViewProps, MuiPropTypes, SvgIcon} from './index';

export {Icon} from './index';

interface IExtraProps {
	[key: string]: any;
}

export type TypeMuiIcon = React.FC<any>; // typeof IconViewList
interface IProps extends IMuiViewProps, IExtraProps {
	name: string;
	color?: MuiPropTypes.Color;
}

export const MuiIcon = (
	{name, ...props}: IProps,
) => (
	<Icon {...props}>{name}</Icon>
);

interface ISvgProps extends IMuiViewProps, IExtraProps {
	path: string;
}

export const MuiSvgIcon = (
	{path, ...props}: ISvgProps,
) => (
	<SvgIcon {...props}>
		<path d={path}/>
	</SvgIcon>
);

interface IIconButtonProps extends IMuiViewProps, IExtraProps {
	icon: string;
	color?: MuiPropTypes.Color;
	onClick?: ButtonEventHandler;
}

export const MuiIconButton = (
	{icon, ...props}: IIconButtonProps & object,
) => (
	<IconButton {...props}>
		<Icon>{icon}</Icon>
	</IconButton>
);

export const defineMuiIcon = (name: string): React.FC =>
	() => <Icon>{name}</Icon>;