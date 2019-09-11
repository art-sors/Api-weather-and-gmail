const fetch = require("node-fetch");
let data = {};
let userView = [];
const city = 'London';
let todayDate;

(async function weather() {
    const forFiveDays = 
                await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=
                    ${city}&APPID=3fed14b8045febd38feb47378bebc3bf&units=metric`);

    data = await forFiveDays.json();
})();

const {Builder, By, Key, until} = require('selenium-webdriver');
 
(async function testTask() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {

    driver.get('https://mail.google.com/mail');

    await driver.wait(until.elementLocated(By.name('identifier')), 180000);
    const enterMail = await driver.findElement(By.name('identifier'));
    await enterMail.sendKeys('fortest368@gmail.com');

    await driver.wait(until.elementLocated(By.id('identifierNext')), 180000);
    const toPass = await driver.findElement(By.id('identifierNext'));
    await toPass.click();;

    await driver.wait(until.elementLocated(By.name('password')), 180000);
    const enterPass = await driver.findElement(By.name('password'));
    await enterPass.sendKeys('qw_12_qw');

    await driver.wait(until.elementLocated(By.id('passwordNext')), 180000);
    const toInbox = await driver.findElement(By.id('passwordNext'));
    await toInbox.click();;

    await driver.wait(until.elementLocated(By.className('T-I J-J5-Ji T-I-KE L3')), 180000);
    const toWrite = await driver.findElement(By.className('T-I J-J5-Ji T-I-KE L3'));
    await toWrite.click();

    await driver.wait(until.elementLocated(By.name('to')), 180000);
    const toWhom = await driver.findElement(By.name('to'));
    await toWhom.sendKeys('fortest368@gmail.com');

    await driver.wait(until.elementLocated(By.name('subjectbox')), 180000);
    const subjectBox = await driver.findElement(By.name('subjectbox'));
    dateT();
    await subjectBox.sendKeys('Weather for ' + city + ':' + todayDate);

    await driver.wait(until.elementLocated(By.className('Am Al editable LW-avf tS-tW')), 180000);
    const letter = await driver.findElement(By.className('Am Al editable LW-avf tS-tW'));
    userViewF(data);
    await letter.sendKeys(userView.join('\n'));

    await driver.wait(until.elementLocated(By.className('T-I J-J5-Ji aoO v7 T-I-atl L3')), 180000);
    const send = await driver.findElement(By.className('T-I J-J5-Ji aoO v7 T-I-atl L3'));
    await send.click();

    await driver.wait(until.elementLocated(By.name('q')), 180000);
    const search = await driver.findElement(By.name('q'));
    await search.sendKeys('Погода');
    const tosearch = await driver.findElement(By.className('gb_tf gb_uf'));
    await tosearch.click();

    await driver.wait(until.elementLocated(By.className('zA zE')), 180000);
    const openLetter = await driver.findElement(By.className('zA zE'));
    await openLetter.click();

    await driver.wait(until.elementLocated(By.className('a3s aXjCH')), 180000);
    const forCheck = await driver.findElement(By.className('a3s aXjCH'));
    await driver.wait(until.elementTextIs(forCheck, userView.join('\n')), 180000);
    console.log('done');

  } finally {
    await driver.quit();
  }
})();

function userViewF(data) {
    userView = data.list.map(function (item) { 
        return userView + 'Date ' + item.dt_txt + ' Temperature ' +
                item.main.temp + ' pressure ' + item.main.pressure + 
                '  wind  ' + item.wind.speed});
};

function dateT () {
    const date = new Date();
    todayDate = date.toLocaleTimeString();
};
