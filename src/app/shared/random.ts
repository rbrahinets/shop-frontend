export class Random {
  static getRandomIds(
    quantity: number,
    max: number
  ): number[] {
    const rangeOfNumbers = Random.getRangeOfNumbers();

    return Array(quantity)
      .fill(undefined)
      .map(() => {
        const id = rangeOfNumbers[Math.floor(max * Math.random())];
        max--;

        const index = rangeOfNumbers.indexOf(id, 0);
        if (index > -1) {
          rangeOfNumbers.splice(index, 1);
        }

        return id;
      });
  }

  private static getRangeOfNumbers() {
    let numbers: number[] = [];
    for (let i = 0; i < 50; i++) {
      numbers.push(i);
    }
    return numbers;
  }
}
