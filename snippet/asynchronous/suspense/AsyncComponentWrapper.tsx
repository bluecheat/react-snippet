import React, { SuspenseProps } from 'react';
import { ErrorBoundary, ErrorBoundaryPropsWithRender } from 'react-error-boundary';
import { ErrorFallback } from '@/snippet/asynchronous/suspense/Fallback/ErrorFallback';
import ComponentSuspense from '@/snippet/asynchronous/suspense/ComponentSuspense';

type ExceptFallbackErrorBoundaryAttributes = Omit<ErrorBoundaryPropsWithRender, 'fallbackRender' | 'fallback' | 'FallbackComponent'>;

type AsyncComponentSuspenseProps = {
	children: React.ReactNode;
	errorFallback?: ErrorBoundaryPropsWithRender['fallbackRender'];
	pendingFallback: SuspenseProps['fallback'];
} & ExceptFallbackErrorBoundaryAttributes;

const AsyncComponentWrapper: React.FC<AsyncComponentSuspenseProps> = ({
	children,
	errorFallback = ErrorFallback,
	pendingFallback,
	...restErrorBoundaryAttributes
}) => {
	return (
		<ErrorBoundary fallbackRender={errorFallback} {...restErrorBoundaryAttributes}>
			<ComponentSuspense fallback={pendingFallback}>{children}</ComponentSuspense>
		</ErrorBoundary>
	);
};

export default AsyncComponentWrapper;
