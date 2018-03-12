const randomInt = (n)=>{
  if (typeof(n)==='number'&&n>0) {
    return Math.floor(Math.random()*n+1)
  }
  return randomInt(1000)
}

const lipsum = (n=1)=>{
  const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'vivamus', 'et', 'accumsan', 'augue', 'duis', 'eget', 'nunc', 'id', 'sodales', 'finibus', 'vestibulum', 'sagittis', 'magna', 'nec', 'rutrum', 'volutpat', 'risus', 'tincidunt', 'justo', 'non', 'gravida', 'tortor', 'enim', 'in', 'urna', 'ut', 'vel', 'metus', 'pellentesque', 'porttitor', 'vitae', 'nisi', 'nullam', 'faucibus', 'condimentum', 'quam', 'imperdiet', 'class', 'aptent', 'taciti', 'sociosqu', 'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra', 'inceptos', 'himenaeos', 'interdum', 'malesuada', 'fames', 'ac', 'ante', 'primis', 'curabitur', 'nibh', 'quis', 'iaculis', 'cras', 'mollis', 'eu', 'congue', 'leo']
  const count = randomInt(n)
  const sentence = []
  const indexes = (new Array(count)).fill(0).map(index=>{
    return Math.floor(Math.random()*words.length)
  })
  indexes.forEach((index,i)=>{
    const word = words[index]
    if (i===0)
      sentence.push(word.charAt(0).toUpperCase()+word.substr(1))
    else
      sentence.push(word)
  })
  return sentence.join(' ')
}
