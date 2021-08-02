import React from 'react'
import { availableLanguages } from '~utils/constants'
import { uppercaseFirstLetter } from '~utils/helpers'

const SelectLanguages = (props, context) => {
  // console.log(props)
  // console.log(context)
  return (
    <div className='px-4'>
      <select onChange={(e) => console.log(e.target)}>
        {availableLanguages.map((lang) => <option value={lang} key={lang}>{uppercaseFirstLetter(lang)}</option>)}
      </select>
    </div>
  )
}

export { SelectLanguages }