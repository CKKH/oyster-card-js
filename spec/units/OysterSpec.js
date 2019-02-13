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

    it('records entry station to journeys', () => {
      oyster.topUp(10)
      oyster.tapIn('Kings Cross')
      expect(oyster.journeys[0]).toContain('Kings Cross')
    })
  })

  describe('#tapOut()', () => {
    it('records exit station to journeys', () => {
      oyster.topUp(10)
      oyster.tapIn('Kings Cross')
      oyster.tapOut('Liverpool Street')
      expect(oyster.journeys[0]).toContain('Liverpool Street')
    })
  })
})
