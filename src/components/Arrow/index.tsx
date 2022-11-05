import { ArrowBackButton, ArrowForwardButton } from './styles'

interface ArrowProps {
  disabled?: boolean
  onClickLeft?: (e: any) => void
  onClickRight?: (e: any) => void
}

export const Arrow = ({onClickLeft, onClickRight}:ArrowProps) => {
  return (
    <>
      { onClickLeft ? (
         <ArrowBackButton 
          onClick={onClickLeft}
        />
      ) : (
        <ArrowForwardButton
          onClick={onClickRight}
        />
      )}
    </>
  )
}