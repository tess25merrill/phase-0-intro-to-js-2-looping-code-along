const recipients = ["Paige", "Liam", "Trevor"];
const occassion = "birthday"

function writeCards(recipients, occassion) {
    let cardArray = [];
    for (let i = 0; i < recipients.length; i++){
        cardArray[i] = `Thank you, ${recipients[i]}, for the wonderful ${occassion} gift!`;
    }
    return cardArray;
};
//writeCards(["Paige", "Liam", "Trevor"], "birthday");
//instead of logging messages, add into new array
//then return new array

function countDown(num) {
    while (num > -1) {
        console.log(num--);
    }
}