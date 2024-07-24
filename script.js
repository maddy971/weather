const ButtonsEle = document.querySelectorAll("button")
// console.log(ButtonsEle);
const inputEle = document.getElementById("result")
for(let i=0; i<ButtonsEle.length; i++)
{
    ButtonsEle[i].addEventListener("click", ()=> 
    {
        // console.log(ButtonsEle[i].textContent);
        const buttonsValue = ButtonsEle[i].textContent
        if(buttonsValue === "C")
        {
            clearResult()
        }
        else if(buttonsValue === "=")
        {
            calculateResult()
        }
        else
        {
            appendvalue(buttonsValue)
        }
    })
}
function clearResult()
{
    inputEle.value = ""
}
function calculateResult()
{
    inputEle.value = eval(inputEle.value)
}
function appendvalue(buttonsValue)
{
    inputEle.value += buttonsValue
}