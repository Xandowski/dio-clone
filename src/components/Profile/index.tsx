import { ProfileContainer, ProfilePicture, ProfileInfo } from "./styles"

interface ProfileProps {
  imageUrl: string
  variant?: string
}

export const Profile = ({imageUrl, variant}: ProfileProps) => {
  return (
    <ProfileContainer>
      <ProfilePicture variant={variant}>
        <img src={imageUrl} alt="user picture" />
      </ProfilePicture>

      <ProfileInfo>

      </ProfileInfo>
    </ProfileContainer>
  )
}