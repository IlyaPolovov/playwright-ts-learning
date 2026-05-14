import { Page, Locator } from '@playwright/test'

export class LoginPage {
  // 1. Страница
  readonly page: Page
  
  // 2. Локаторы — описываем один раз
  readonly emailOrPhoneInput: Locator
  readonly passwordInput: Locator
  readonly rememberMeCheckbox: Locator
  readonly submitButton: Locator
  readonly registrationLink: Locator

  // 3. Конструктор — инициализируем локаторы
  constructor(page: Page) {
    this.page = page
    this.emailOrPhoneInput = page.getByRole('textbox', { name: 'Номер телефона или E-mail' })
    this.passwordInput = page.getByRole('textbox', { name: 'Пароль' })
    this.rememberMeCheckbox = page.getByRole('checkbox', { name: 'Запомнить меня' })
    this.submitButton = page.getByRole('button', { name: 'Войти' })
    this.registrationLink = page.getByRole('link', { name: 'Зарегистрироваться' })
  }
  
  // 4. Методы — действия на странице
  async goto() {
    await this.page.goto('/login?skip_captcha=true')
  }
  
  async login(username: string, password: string) {
    await this.emailOrPhoneInput.fill(username)
    await this.passwordInput.fill(password)
    await this.submitButton.click()
  }
}