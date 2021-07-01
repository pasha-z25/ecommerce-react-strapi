import React, { useContext } from 'react'
import LangContext from '../context'

export const text = (str) => {
  const [language, setLanguage] = useContext(LangContext)
  // eslint-disable-next-line global-require,import/no-dynamic-require
  const content = require(`~assets/text-content/${language}.json`)

  return content[str]
}
