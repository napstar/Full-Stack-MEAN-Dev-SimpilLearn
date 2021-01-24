function expense(name,description,amount)
{
    this.name = name;
    this.description = description;
    this.amount = amount;

}
function budget()
{
    this.expensesList=[];
    this.addNewExpense=(expense)=>{
        this.expensesList.push(expense);
    };
    this.removeExpense=(expenseName)=>{
        let success=false;
        var searchValue = this.expensesList.filter(obj=>obj.name===expenseName);
        if(searchValue!==null || searchValue!==undefined)
        {
            this.expensesList.pop(searchValue);
            success=true;
        }
       return success;
    };
    this.getExpenseTotal=()=>{
        let total=0;
        if(this.expensesList.length<1)
        {
            return total;
        }
        else{
            this.expensesList.forEach(function (arrayItem) {
                total=total+parseFloat(arrayItem.amount);
               
             });
             return total;
        }
    };
}