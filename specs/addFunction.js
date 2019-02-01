//4. This spec is to show how resuable functions work
describe('Add function demo',function(){
    //functions should be inside the describe block but outside the it block
    function Add(a,b){
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
    }

    it('Should be able to call Add Function', function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        Add(4,5);
        Add(5,5);
        Add(4,8);
        Add(3,7);
        Add(1000,2000);

        element.all(by.repeater('result in memory')).each(function(item){
            item.element(by.css('td:nth-child(3)')).getText().then(function(text){
               console.log(text);
            })
        })    
    })

});