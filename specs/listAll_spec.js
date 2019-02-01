//3. This spec is to show how to chain locators using: element(locator).element(locator)
//and find an array of elements using: element.all(locator) 

describe('Get text from the list',function(){

    it('Should display all text from the list',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('3');
        element(by.model('second')).sendKeys('4');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('6');
        element(by.id('gobutton')).click();

        element(by.model('first')).sendKeys('7');
        element(by.model('second')).sendKeys('8');
        element(by.id('gobutton')).click();

        //Below code will only print the first result among other two results in the list
        // element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(text){
        //     console.log(text);
        // });
        
        //to print out all results, we use element.all to get the size first 
        element.all(by.repeater('result in memory')).count().then(function(text){
               console.log(text);
        })
        //we use each function to print all result that displayed in the list
        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){
               console.log(text);
            })

        })

    })


});