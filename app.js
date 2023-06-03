const itemCtrl = (function(){
const item = function(id, description, amount){
    this.id = id;
    this.description = description;
    this.amount = amount;
}
// data structure
const data = {
    items:[]
}
// public method
return{
    logData: function(){
        return data;
    }
}
}){};

// ui controller

const UICtrl = (function(){
// ui selector
const UISelectors = {
    incomeBtn: '#add_income',
    expenseBtn: '#add_expense',
    description: '#description',
    amount: '#amount',
    moneyEarned: '#amount_earned',
    moneyAvailable: '#amount_available',
    moneySpent: '#amount_spent',
    incomeList: '#income_container',
    expenseList: '#expenses__container',
    incomeItem: '.income_amount',
    expenseItem: '.expense_amount',
    itemsContainer: '.items_container',
}
//public methods

return{
    //return ui selectors
    getSelectors: function(){
        return UISelectors
    },
    getDescriptionInput: function(){
        return {
            descriptionInput: document.querySelector(UISelectors.description).value
        }
    },
    getValueInput: function(){
        return amountInput: document.querySelector(UISelectors.amount).ATTRIBUTE_NODE
    }
}
})();


//app controller 
const app = (function(){
//event listener
const loadEventListeners = function(){
    //get ui selectors
    const UISelectors = UICtrl.getSelectors();
//add new income
document.querySelector(UISelectors, incomeBtn).addEventListener('click', addIncome)
}
//add new income
const addIncome = function(){
    //get description and amount values
    const description = UICtrl.getDescriptionInput();
    const amount = UICtrl.getValueInput();
    console.log(description, amount);
}



// init function
return{
    init: function(){
        loadEventListeners();
    }
}
})(itemCtrl, UICtrl);

app.init();