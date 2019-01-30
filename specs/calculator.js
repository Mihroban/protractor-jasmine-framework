

describe('Protractor calculator demo test', function(){

    it('locators should work',function(){
        browser.get('https://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys("5");
        element(by.model('second')).sendKeys("7");
        element(by.id('gobutton')).click();

        //Below will throw an erro, because it returns a promise,to get the
        //specific text, we need to resolve that promise using then(function)
        //console.log(element(by.css("h2[class='ng-biding']")).getText());

        //In the below line of code, once the returned promise resolved, the result will be passed to argument'text' 
        element(by.css("h2[class='ng-binding']")).getText().then(function(text){
            console.log(text);
        })

        //When we do assertion verify result, jasmine assertion will take of the promis
        expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('12');

    })
});