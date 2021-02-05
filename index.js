const listContainerElement = document.getElementById('listContainer')

const items = []

const createItem = (name) => {
  const listElement = document.createElement('div')

  listElement.className = 'item'
  listElement.innerHTML = name
  listElement.addEventListener('click', deleteMe)
  listElement.setAttribute('data-index', items.length)

  listContainerElement.appendChild(listElement)

  items.push(name)

  localStorage.items = JSON.stringify(items)
}

const handleSubmit = (event) => {
  event.preventDefault()
  const inputElement = document.getElementById('listAddInput')

  createItem(inputElement.value)
  console.log(localStorage.items)

  inputElement.value = ''

  return false
}

const clearList = (event) => {
  listContainerElement.innerHTML = ''
  localStorage.items = JSON.stringify([])
}

const deleteMe = (event) => {
  items.splice(event.target.getAttribute('data-index'), 1)
  localStorage.items = JSON.stringify(items)

  listContainerElement.removeChild(event.target)
}

if (localStorage.items) {
  const itemsToSync = JSON.parse(localStorage.items)
  itemsToSync.forEach((item) => {
    createItem(item)
  })
} else {
  localStorage.items = JSON.stringify([])
}
