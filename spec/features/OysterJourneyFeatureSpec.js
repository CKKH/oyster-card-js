describe('User buys an Oyster Card and travels around London', () => {
  it('User buys an Oyster Card and completes a journey', () => {
    let journeys = new Journeys()
    let card = new Oyster(journeys)
    card.topUp(50)
    card.tapIn("Kings X")
    card.tapOut("Liverpool Street")
    expect(card.journeys).toContain(["Kings X", "Liverpool Street"])
  })
})
