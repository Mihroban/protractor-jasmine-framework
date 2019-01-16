
describe('Enter name feature',function(){
    it('should enter name as Mikki',function(){

        browser.get('https://angularjs.org/');
        protractor.element(by.model('yourName')).sendKeys('Mikki');

        var text = element(by.xpath('/html/body/div[2]/div[1]/div[2]/div[2]/div/h1'));
        expect(text.getText()).toEqual('Hello Mikki!XXX');
        //expect(text.getText()).toEqual('Hello Mikki!');

    });

}); 