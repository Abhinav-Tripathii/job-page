import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='pb-15 pt-5 flex items-center gap-10 px-18 h-[90vh]'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default PageContent
