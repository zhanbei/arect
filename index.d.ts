//

export * from 'react';
export * as React from 'react';
export type ReactEventHandler = React.ReactEventHandler;

export * from 'react-dom';
export * as ReactDom from 'react-dom';

export type ReactDOM = ReactDom;
export default React;

export type ReactView<Props> = React.FC<Props>;
export type ReactNode = React.ReactNode;
export type ReactElement = React.ReactElement;

export type ButtonEventHandler = () => any;

export module ReactTypingUtil {
	export type TransformAsReactViews<T> = {
		[P in keyof T]: ReactView<T[P]>;
	};
}
