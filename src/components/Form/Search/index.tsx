import { FormEvent, useState } from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { Fieldset, FormContainer, InputSearch, SearchButton } from "./styles"

export const Form = () => {
  const [isInputSearchHidden, setIsInputSearchHidden] = useState(true)

  function handleInputSearch(e: FormEvent) {
    e.preventDefault()
    
    setIsInputSearchHidden(!isInputSearchHidden)
  }

  window.onclick = function(event) {
    if(event.target == document.querySelector('body')) {
      setIsInputSearchHidden(true)
    }
  }

  return (
    <FormContainer action=""
      isInputSearchHidden={isInputSearchHidden}
    >
      <Fieldset>
      <SearchButton
      type="submit"
        onClick={handleInputSearch}
      >
        <AiOutlineSearch />
      </SearchButton>
        <InputSearch
          
          type="text"
          placeholder="Search"
        />
      </Fieldset>
    </FormContainer>
  )
}