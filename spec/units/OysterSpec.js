describe('Oyster', () => {
  describe('#topUp()', () => {
    it('increased balance()', () => {
      let oyster = new Oyster()
      oyster.topUp(10)
      expect(oyster.balance).toEqual(10)
    })
  })
})
