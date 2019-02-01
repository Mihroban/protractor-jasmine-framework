//1. This spec is to show how to use jasmine assertion to verify the result;

describe('Enter name feature of AngularJS app',function(){
    it('should enter name as Mikki',function(){

        browser.get('https://angularjs.org/');
        protractor.element(by.model('yourName')).sendKeys('Mikki');

        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        //expect(text.getText()).toEqual('Hello Mikki!XXX');
        expect(text.getText()).toEqual('Hello Mikki!');
    })
});

    describe('Verify the title ', function(){
        it('Should get the title of the CRM Page', function(){
            browser.get('http://www.protractortest.org');
            expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
        })

}); 