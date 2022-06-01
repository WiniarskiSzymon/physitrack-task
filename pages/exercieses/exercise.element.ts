import { ChainablePromiseElement } from 'webdriverio';

class ExerciseElement {
  private element: WebdriverIO.Element;

  constructor(element: WebdriverIO.Element) {
    this.element = element;
  }

  get addToBasketButton(): ChainablePromiseElement<WebdriverIO.Element>{
      return this.element.$('a[role="button"] img[title="Add exercise to basket"]')
  }

  async addToBasket(): Promise<void>{
    this.addToBasketButton.click()
  }

  async getText(): Promise<string>{
      return await this.element.$('.lc-text').getText()
  }
}

export default ExerciseElement