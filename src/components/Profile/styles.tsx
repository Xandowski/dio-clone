import styled from "styled-components";

interface ProfileProps {
  variant?: string
}

export const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
`

export const ProfilePicture = styled.div<ProfileProps>`
  width: fit-content;
  img {
    width: ${({variant}) => variant === 'navbar' ? '38px' : '62px'};
    height: ${({variant}) => variant === 'navbar' ? '38px' : '62px'};
    border-radius: 50%;
    border: 3px solid ${({variant}) => variant === 'ranking' ? 'white' : 'green'};

   
  }
  border-radius: 50%;
`
export const ProfileInfo = styled.div<ProfileProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${({variant}) => variant === 'side' ? '0 2.5rem' : variant === 'feed' ? '0 0 0 1rem' : variant === 'ranking' && '0 0 0 0.5rem'};
  width: 100%;
  height: 64px;

  > div:nth-child(1){
    display: flex;
    flex-direction: ${({variant}) => variant === 'feed' && 'column'};
    justify-content: ${({variant}) => variant === 'feed' ? 'space-around' : variant === 'side' && 'space-between'};
    height: ${({variant}) => variant === 'feed' && '100%'};

    > span:nth-child(2) {
      background-color: ${({variant}) => variant === 'side' && '#00af00'};
      border-radius: 10rem;
      font-size: 0.8rem;
      font-weight: 600;
      padding: ${({variant}) => variant === 'side' && '0.2rem 0.4rem'};
    }
  }

  div:nth-child(2) {
    > div:nth-child(1){
      display: flex;
      gap: ${({variant}) => variant === 'ranking' && '8px'};
      justify-content: ${({variant}) => variant === 'side' && 'space-between'};
      margin-bottom: 3px;
    }
    
    > div:nth-child(2) {
      background-color: white;
      height: 5px;
      width: 100%;
      border-radius: 8px;

      > div {
        background-color: #00af00;
        width: 90%;
        height: 5px;
        border-radius: 8px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: ${({variant}) => variant === 'side' ? '0 0 0 1rem' : variant === 'feed' && '0 0 0 1rem'};;
  }
`