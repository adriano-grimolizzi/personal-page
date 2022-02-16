const initialValue = 0
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
)

describe('reduce tests', () => {
    it('should count', () => {
        expect(sumWithInitial).toBe(10)
    })
})