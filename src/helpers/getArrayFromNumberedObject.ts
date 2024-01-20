interface Param {
  [key: string]: unknown
}

const getArrayFromNumberedObject = (object: Param | null, key: string) => {
  const res = [] as unknown[]

  if (!object) return res

  let i = 1

  while (object[key + i]) {
    res.push(object[key + i])
    i++
  }

  return res
}

export { getArrayFromNumberedObject }
