const inputBill = document.getElementById('billTotalInput')
const inputTip = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = ()=>{
    const bill = Number(inputBill.value)
    const tip = Number(inputTip.value) / 100
    const totalTip = tip * bill
    const totalAmount = bill + totalTip

    const perPersonTotal = totalAmount/numberOfPeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
    
}

const increasePeople = ()=>{
   numberOfPeople += 1
   numberOfPeopleDiv.innerText = numberOfPeople
   calculateBill()
}

const decreasePeople = ()=>{
   if(numberOfPeople <= 1){
    return
   }
   numberOfPeople -= 1
   numberOfPeopleDiv.innerText = numberOfPeople
   calculateBill()
}