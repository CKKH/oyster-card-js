describe('Oyster', () => {
  let oyster

  beforeEach(() => {
    oyster = new Oyster()
  })

  describe('#topUp()', () => {
    it('increased balance()', () => {
      oyster.topUp(10)
      expect(oyster.balance).toEqual(10)
    })
  })

  describe('#tapIn()', () => {
    it('deducts fare from balance', () => {
      oyster.topUp(10)
      oyster.tapIn('Kings Cross')
      expect(oyster.balance).toEqual(9)
    })
  })
})
