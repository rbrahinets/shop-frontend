export class Random {
  static getRandomIds(
    quantity: number,
    max: number
  ): number[] {
    let range: number[] = [];
    for (let i = 0; i < 50; i++) {
      range.push(i);
    }

    return Array(quantity)
      .fill(undefined)
      .map(() => {
        const id = range[Math.floor(max * Math.random())];
        max--;

        const index = range.indexOf(id, 0);
        if (index > -1) {
          range.splice(index, 1);
        }

        return id;
      });
  }
}
