export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      throw Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }
}
