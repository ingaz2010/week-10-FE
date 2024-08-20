const formButton = document.getElementById('formSubmit')

let number = 0

formButton.addEventListener('click', (event) => {
    event.preventDefault()
    
    // variable for the form
    let name = document.getElementById('name').value
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    

    //create a node and append it
    let newTableRow = document.createElement('tr')

    let numberNode = document.createElement('td')
    numberNode.innerHTML = number
    newTableRow.append(numberNode)

    let nameNode = document.createElement('td')
    nameNode.innerHTML = name
    newTableRow.append(nameNode)

    let phoneNode = document.createElement('td')
    phoneNode.innerHTML = phone
    newTableRow.append(phoneNode)

    let emailNode = document.createElement('td')
    emailNode.innerHTML = email
    newTableRow.append(emailNode)

    document.getElementById('tBody').appendChild(newTableRow)

    number++
})