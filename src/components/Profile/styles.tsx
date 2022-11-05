import styled from "styled-components";

interface ProfilePicturesProps {
  variant?: string
}

export const ProfileContainer = styled.div`

`

export const ProfilePicture = styled.div<ProfilePicturesProps>`
  width: fit-content;
  img {
    width: ${({variant}) => variant === 'navbar' ? '38px' : '62px'};
    height: ${({variant}) => variant === 'navbar' ? '38px' : '62px'};
    border-radius: 50%;
    border: 3px solid green;
  }
  border-radius: 50%;
`
export const ProfileInfo = styled.div`
`