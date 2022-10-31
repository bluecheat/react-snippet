import Image, { ImageProps } from 'next/image';
import styled from '@emotion/styled';
import React from 'react';

const AutoHeightImageWrapper = styled.div`
  width: 100%;
  position: relative;

  & > span {
    position: unset !important;

    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
  }
`;

const AutoHeightImage: React.FC<ImageProps> = ({ ...props }) => {
	return (
		<AutoHeightImageWrapper>
			<Image layout='fill' className='autoImage' {...props} />
		</AutoHeightImageWrapper>
	);
};

export default AutoHeightImage;
