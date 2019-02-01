//5. This spec will show dropdown handling using element.all().each() and chain locators(parent/child) 

describe('Calculations using differen operators from dropdown list', function(){
    function Calcu(a,b,c){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);

        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(value){
            
            if(value == c){
                item.click();
            }    
            })

        })

        element(by.id('gobutton')).click();

    }

    it('Should select different operators and do calculations', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        Calcu(7,15,'MULTIPLICATION');
        Calcu(8,10,'ADDITION');
        Calcu(81,9,'DIVISION');
        Calcu(20,3,'SUBTRACTION');

        element.all(by.repeater('result in memory')).each(function(result){
            result.element(by.css('td:nth-child(3)')).getText().then(function(text){
               console.log(text);
            })

        })    
    })



    xit('Print out list of operators', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');

        //below code is meaning: get all the element which has tagName 'option';
        //once all elements grabed and retrieve the values using getAttribute;
        element.all(by.tagName('option')).each(function(item){
            item.getAttribute('value').then(function(value){
                console.log(value);
            })

        })
    })

});