import styled from '@emotion/styled';

const StyledTitle = styled.h1((props) => ({
	color: props.theme.fontColors.primary,
	backgroundColor: props.theme.colors.primary,
}));

const StyledSubTitle = styled.h2((props) => ({
	color: props.theme.fontColors.primary,
	backgroundColor: props.theme.colors.primary,
}));

const theme = () => {
	return <>
		<StyledTitle>테마 설정</StyledTitle>
		<StyledSubTitle>테마 서브 타이틀</StyledSubTitle>
	</>;
};

export default theme;