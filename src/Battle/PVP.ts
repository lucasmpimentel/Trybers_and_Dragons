import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  constructor(private p1: Fighter, private p2: Fighter) {
    super(p1);
  }

  fight(): number {
    if (this.p1.strength > this.p2.strength) {
      return 1;
    }
    return -1;
  }
}