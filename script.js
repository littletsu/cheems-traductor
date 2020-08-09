const parseText = (text) => {
  let appendM = ['a', 'e', 'i', 'o', 'u']
  let exclude = [[/my/g, 'y'], [/ml/g, 'l'], [/ma/g, 'a'], [/mu/g, 'u']]
  let replace = [/n/g]
  let textSplit = text.replace(/\\n/g, '\n').split('')

  let res = textSplit
      .map(char => {
              return appendM.indexOf(char) !== -1 ? char+'m' : char
      })
      .join('')
      .split('')

  const removeDuplicate = (char, i) => !((res[i-1] === 'm') && (char === 'm'))

  res = res
      .filter(removeDuplicate)
      .join('')

  replace.forEach(regex => {
      res = res.replace(regex, 'm')
  })
  res = res
      .split('')
      .filter(removeDuplicate)
      .join('')

  exclude.forEach(regex => {
      res = res.replace(regex[0], regex[1])
  })

  return res
}
