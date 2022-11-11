import { ProfileContainer, ProfilePicture, ProfileInfo } from "./styles"

interface ProfileProps {
  imageUrl: string
  variant?: string
  firstName?: string
  secondName?:string
}

export const Profile = ({imageUrl, variant, firstName, secondName}: ProfileProps) => {
  return (
    <ProfileContainer>
      <ProfilePicture variant={variant}>
        <img src={imageUrl} alt="user picture" />
      </ProfilePicture>

      {variant !== 'navbar' && (
        <ProfileInfo variant={variant}>
          <div>
            <strong>{firstName ? firstName : 'Usuário Anonimo'}</strong>
            {variant === 'side' ? (
              <span>Level 14</span>
            ): (
              <span>13 minutos</span>
            )}
          </div>
         { variant === 'side' && (
           <div>
            <div>
              <span>Experience</span>
              <span>15495/16355</span>
            </div>
            <div>
              <div></div>
            </div>
          </div>
         )}
        </ProfileInfo>
      )}
    </ProfileContainer>
  )
}