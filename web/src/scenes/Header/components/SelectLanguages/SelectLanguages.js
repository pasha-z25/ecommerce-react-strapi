import React from 'react'
import { availableLanguages } from '~utils/constants'
import { uppercaseFirstLetter } from '~utils/helpers'

const SelectLanguages = () => {

  return (
    <div className='px-4'>
      <select>
        {availableLanguages.map((lang) => <option value={lang} key={lang}>{uppercaseFirstLetter(lang)}</option>)}
      </select>
    </div>
  )
}

export { SelectLanguages }