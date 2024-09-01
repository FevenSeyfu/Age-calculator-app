import React from 'react'
import Typography from './Components/Utility/Typography'

const App = () => {
  return (
    <div>
      {/* text typogrpahy */}
      <Typography elType="headingL">Heading Large</Typography>
      <Typography elType="headingM">Heading Medium</Typography>
      <Typography elType="headingS">Heading Small</Typography>
      <Typography elType="body">This is body text.</Typography>
    </div>
  )
}

export default App