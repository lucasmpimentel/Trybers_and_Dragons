import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  constructor(private p: Fighter, private m: SimpleFighter[]) {
    super(p);
  }

  fight(): number {
    const monsterTotalStr = this.m.reduce(
      (a, monster) => a + monster.strength,
      0,
    );
    if (this.p.strength > monsterTotalStr) {
      return 1;
    }
    return -1;
  }
}
