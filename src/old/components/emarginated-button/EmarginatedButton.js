import React from "react"

import './EmarginatedButton.css'

const getClassName = emarginated => emarginated ? 'emarginated' : 'non-emarginated'

export default ({emarginated}) => <button className={getClassName(emarginated)}>DON'T CLICK ME...</button>
