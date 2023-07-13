import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Test = ({ children, placement = "", title = "" }) => {
  return (
    <div>
       <button
  data-tooltip-id="login"
>Click me
</button>
<ReactTooltip id="login" place="bottom" variant='info'  content='primary'/>
    </div>
  )
}

export default Test
