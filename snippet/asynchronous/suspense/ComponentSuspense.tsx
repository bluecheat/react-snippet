import React, { Suspense } from 'react';
import useMounted from '@/hooks/useMounted';

interface ComponentSuspenseProps {
	children: React.ReactNode;
	fallback?: React.ReactNode;
}

const ComponentSuspense: React.FC<ComponentSuspenseProps> = ({ children, fallback }) => {
	const isMounted = useMounted();
	if (isMounted) {
		return <Suspense fallback={fallback ? fallback : <div>Loading...</div>}>{children}</Suspense>;
	}

	return <>{fallback}</>;
};

export default ComponentSuspense;
