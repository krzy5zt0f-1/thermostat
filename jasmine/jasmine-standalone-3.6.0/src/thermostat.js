'use strict';

class Thermostat {
  constructor() {
    this._temp = 20;
    this.MINIMUM_TEMP = 10;
    this.DEFAULT_TEMP = 20;
    this.MAX_LIMIT_PSM_ON = 25;
    this.MAX_LIMIT_PSM_OFF = 32;
    this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
    this.HIGH_ENERGY_USAGE_LIMIT = 25;
    this._powerSavingMode = true;
  }

  get temperature() {
    return this._temp;
  }

  reset() {
    this._temp = this.DEFAULT_TEMP;
  }

  get powerSavingMode() {
    return this._powerSavingMode;
  }

  switchMode() {
    this._powerSavingMode = !this._powerSavingMode;
  }

  up() {
    if (this._powerSavingMode && this._temp < this.MAX_LIMIT_PSM_ON) {
    this._temp += 1;} else if (this._powerSavingMode === false && this._temp < this.MAX_LIMIT_PSM_OFF) {
      this._temp += 1;};
    }

  down() {
    if (this._temp !== this.MINIMUM_TEMP) {
    this._temp -= 1;}
  }

  energyUsage() {
    if (this._temp < this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "low-usage";
    } else if (this._temp <= this.HIGH_ENERGY_USAGE_LIMIT && this._temp >= this.MEDIUM_ENERGY_USAGE_LIMIT) {
      return "medium-usage";
    } else {
      return 'high-usage';
    }
  }
}
