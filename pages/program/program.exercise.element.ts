
class ProgramExerciseElement {
  private element:  WebdriverIO.Element;

  constructor(element: WebdriverIO.Element) {
    this.element = element;
  }


  async getExcerciseName(): Promise<string>{
      return await this.element.$('.lc-text').getText()
  }
}

export default ProgramExerciseElement