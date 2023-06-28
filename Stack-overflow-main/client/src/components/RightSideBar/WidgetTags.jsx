import React from 'react'
import './RightSideBar.css'


const WidgetTags = () => {
    const tags = ['c',
        'css',
        'express',
        'firebase',
        'html',
        'java',
        'javascript',
        'mern' ,
        'mongodb', 
        'mysql' ,
        'next.js',
        'node.js',
        'php',
        'python',
        'reactjs']

  return (
    <div className='widget-tags widget'>
        <h4>Watched tags</h4>
        <div className='widget-tags-div'>
            {tags.map((tag) => {
                return <span>{tag}</span>
            })}
        </div>
    </div>
  )
}

export default WidgetTags