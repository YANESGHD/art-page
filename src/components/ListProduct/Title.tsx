import styled from '@emotion/styled';

export const Title = () => {
  return (
    <Container>
      <Text>Photography / Premium Photos</Text>

      {/* TODO: Add Sort By logic */}
      {/* <Text>
        Sort By: Price <KeyboardArrowDown />
      </Text> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
`;

const Text = styled.h2`
`;
