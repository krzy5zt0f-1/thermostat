'use strict';

describe("Thermostat", function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("has default temp. of 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("can have its temp. restet to  20 degrees", function() {
    for (let i = 0; i <14; i ++) {
      thermostat.down();
    }
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("has power saving mode on by default", function() {
    expect(thermostat.powerSavingMode).toBeTruthy();
  });

  it("has power saving mode on that can be switched on and off", function() {
    thermostat.switchMode();
    expect(thermostat.powerSavingMode).toBeFalsy();
    thermostat.switchMode();
    expect(thermostat.powerSavingMode).toBeTruthy();
  });

  it("has an up() function to increase temp.", function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it("has a down() function to decrease temp.", function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it("has a minimum temp of 10 degrees", function() {
    for (let i = 0; i <14; i ++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it("has a max temp of 25 degrees when saving mode is on", function() {
    for (let i = 0; i <14; i ++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

  it("has a max temp of 3 degrees when saving mode is off", function() {
    thermostat.switchMode();
    for (let i = 0; i <16; i ++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(32);
  });

  it("tells when usage is low", function() {
    for (let i = 0; i <3; i ++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(17);
    expect(thermostat.energyUsage()).toEqual("low-usage");
  });

  it("tells when usage is medium i.e. 18 degrees", function() {
    for (let i = 0; i <2; i ++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(18);
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("tells when usage is medium i.e. 25 degrees", function() {
    for (let i = 0; i <5; i ++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
    expect(thermostat.energyUsage()).toEqual("medium-usage");
  });

  it("tells when usage is high i.e. 31 degrees", function() {
    thermostat.switchMode();
    for (let i = 0; i <11; i ++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(31);
    expect(thermostat.energyUsage()).toEqual("high-usage");
  });
})
