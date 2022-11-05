import { Button } from "./styles"

interface StartProps {
  variant?:string
  to: string
  text: string
}

export const Start = ({variant, to, text}:StartProps) => {
  return (
    <Button to={to}
    >
      {text}
    </Button>
  )
}