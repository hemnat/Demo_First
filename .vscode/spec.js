describe('HybrentWeb', function()
{
   beforeEach(function(){

    browser.get('https://qa35.test.hybrent.com/');
  
   });
    it('TestCaseFirst', function()
    {
        browser.driver.manage().window().maximize();
        element(by.id('userName')).sendKeys('Hemant');
        element(by.id('password')).sendKeys('goouser');
        element(by.className('btn btn-lg btn-primary hyb-login-btn')).click();
        browser.sleep("8000");
    });

});