import React, { useEffect, useState } from 'react'
import TagCloud from 'TagCloud'

const WordCloud = () => {
  const [isLoading, setLoad] = useState(true)

  const container = '.content'
  //   ['Java', 'React', 'mongoDB', 'Express', 'NodeJS', 'Redux', 'HTML5', 'CSS3', 'JS', 'Flask', 'Flutter', 'Dart', 'FireBase', 'MySQl', 'C++', 'C', 'Pythons', 'Django', 'Git', 'Ubuntu' ]
  const texts = [
    'React',
    'HTML5',
    'CSS3',
    'JS',
    'ES6',
    'SCSS',
    'REST API',
    'BOOTSRAP 5',
    'Jquery',
    'Git',
  ]
  const options = {
    radius: 300,
    maxSpeed: 'fast',
    initSpeed: 'fast',
    direction: 135,
    keep: true,
  }
  useEffect(() => {
    if (isLoading) {
      TagCloud(container, texts, options)
      console.log('i fire once')
      setLoad(false)
    }
  })

  return (
    <div className="main">
      <span className="content"></span>
    </div>
  )
}

export default WordCloud
