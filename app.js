const budgetController = (() => {
    
})();

const UIController = (() => {
    return {
        getInput: () => {
            return {
                type: document.querySelector('.add__type').value,  // either inc or exp
                descriiption: document.querySelector('.add__description').value,
                value: document.querySelector('.add__value').value
            };
        }
    };
})();

const appController = ((budgetCtrl, UICtrl) => {

    const ctrlAddItem = () => {
         // Get field input data
        let input = UICtrl.getInput();
        console.log(input);
        
        // Add item to budget controller

        //  Add item to UI
 
        // Calculate the budget

    }

   document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
   document.addEventListener('keypress', (e)=>{
    if(e.keycode === 13 || e.which === 13){
        ctrlAddItem();
    }
   });
})(budgetController, UIController);
