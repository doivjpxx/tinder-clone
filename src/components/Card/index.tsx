import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
`;

const StyledCard = styled.div`
  position: relative;
  background-color: #fff;
  width: 300px;
  max-width: 260px;
  height: 500px;
  box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: space-between;
`;

const StyledLikeButton = styled.button`
  padding: 5px;
  background: #2df187;
  border: 1px solid #2df187;
  color: white;

  &:hover {
    background: white;
    color: #2df187;
  }
`;

const StyledIgnoreButton = styled.button`
  padding: 5px;
  background: #f13b2d;
  border: 1px solid #f13b2d;
  color: white;

  &:hover {
    background: white;
    color: #f13b2d;
  }
`;

const Card = (): JSX.Element => {
  return (
    <Container>
      <StyledCard>
        <img
          width={200}
          height={200}
          src="https://images-ssl.gotinder.com/u/6QweLJ5kEow7H6CrMM5uh1/jowbdGdhFd1Hwj7sMc9Woc.jpg?Policy=eyJTdGF0ZW1lbnQiOiBbeyJSZXNvdXJjZSI6IiovdS82UXdlTEo1a0VvdzdINkNyTU01dWgxLyoiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE2Mzk2MzgyMTV9fX1dfQ__&Signature=L3ftXX8h1iTY1rcGVsbtbdOBSEf4NLayWoe7T1AwNluuLw7x2yrT3yPO1d6GHzogFIy9ZbYY9WlifBuXp13IbS-iJfdEoEfB1cZn025ixiL~ZktXkQe3LS5QkbtKggsrLk2mPB4df9LGj283~EZY5zr3uz4rf9g3yixDIC7M0y2nLREsKNjkBuNy3YUiMcaa6WWhRvQSF0HZVSQDIpe~6PCouU0Mj89z5FjkoeUWL9UfUYcasffT7kcAehG3ge4Wjmnb6CHNwdeX-r72IcDoctAAOWzfGGDPPqRLH6gCMkksswWAUajITi9f-yTH1rSsWeJaoih3hHeqJsinPZhPFw__&Key-Pair-Id=K368TLDEUPA6OI"
        />

        <ButtonWrapper>
          <StyledIgnoreButton>Ignore</StyledIgnoreButton>
          <StyledLikeButton>Like</StyledLikeButton>
        </ButtonWrapper>
      </StyledCard>
    </Container>
  );
};

export default Card;
