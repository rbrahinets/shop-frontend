export class Random {
  static getRandomIds(
    quantity: number,
    max: number
  ): number[] {
    const rangeOfNumbers = Random.getRangeOfNumbers();

    return Array(quantity)
      .fill(undefined)
      .map(() => {
        const id = Random.getRandomId(rangeOfNumbers, max);
        max--;

        const index = rangeOfNumbers.indexOf(id, 0);
        if (index > -1) {
          rangeOfNumbers.splice(index, 1);
        }

        return id;
      });
  }

  private static getRangeOfNumbers(): number[] {
    let numbers: number[] = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  private static getRandomId(
    rangeOfNumbers: number[],
    max: number
  ): number {
    return rangeOfNumbers[
      Math.floor(max * Math.random())
      ];
  }
}
