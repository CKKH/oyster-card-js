describe('Oyster', () => {
  describe('#topUp()', () => {
    it('increased balance()', () => {
      let oyster = new Oyster()
      oyster.topUp(10)
      expect(oyster.balance).toEqual(10)
    })
  })

  describe('#tapIn()', () => {
    it('deducts fare from balance', () => {
      let oyster = new Oyster()
      oyster.topUp(10)
      oyster.tapIn('Kings Cross')
      expect(oyster.balance).toEqual(9)
    })
  })
})
