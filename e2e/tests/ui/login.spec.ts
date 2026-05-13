import { test, expect } from '@playwright/test'
import { generateLoginDataByEmail, generateLoginDataByPhone  } from '@e2e/utils/testData'

test.describe('Позитивные сценарии авторизации', () => {
 
  test.beforeEach(async ({ page }) => {
    
    await page.goto('/login?skip_captcha=true', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    }); 
  });
   
  test('AUTH-P-01: Успешный вход по email и паролю', async ({ page }) => {
    const testData = generateLoginDataByEmail()
    await page.getByRole('textbox', { name: 'Номер телефона или E-mail' }).fill(testData.email)
    await page.getByRole('textbox', { name: 'Пароль' }).fill(testData.password)
    await page.getByRole('button', { name: 'Войти' }).click()

    // Ожидаемый результат: Успешная авторизация и перенаправление в ЛК
    await expect(page).toHaveURL(/\/front_office\/whatsapp/)
    await expect(page.getByRole('link', { name: 'Выход' })).toBeVisible({ timeout: 15000 })
  });

  test('AUTH-P-02: Успешный вход по номеру телефона и паролю', async ({ page }) => {
    const testData = generateLoginDataByPhone()
    await page.getByRole('textbox', { name: 'Номер телефона или E-mail' }).fill(testData.phone)
    await page.getByRole('textbox', { name: 'Пароль' }).fill(testData. password)
    await page.getByRole('button', { name: 'Войти' }).click()

    // Ожидаемый результат: Успешная авторизация и перенаправление в ЛК
    await expect(page).toHaveURL(/\/front_office\/whatsapp/)
    await expect(page.getByRole('alert')).toContainText('Вход в систему выполнен.', { timeout: 15000 })
  });

  test('AUTH-P-03: Переход на страницу регистрации', async ({ page }) => {
    
    await page.getByText('Зарегистрироваться').click()
    const confirmPassword = page.getByLabel('Подтвердите пароль')
    await expect(confirmPassword).toBeVisible({ timeout: 5000 })
  });

  test('AUTH-P-04: Переход на восстановление пароля', async ({ page }) => {
    
    await page.getByText('Забыли пароль?').click()
    const recoveryButton = page.getByRole('button', { name: 'Восстановить пароль' })
    await expect(recoveryButton).toBeVisible({ timeout: 5000 })
  });

  test('AUTH-P-05: Работа контактных иконок', async ({ page }) => {
    // 1. Проверяем иконку телефона
    const phoneLink = page.locator('a[href="tel:88002001263"]').first()
    await expect(phoneLink).toBeVisible()

    // 2. Проверяем иконку написать нам
    const contactLink = page.locator('a[href="/pleasecontactus"]').first()
    await expect(contactLink).toBeVisible()

    // 3. Проверяем иконку почты
    const emailLink = page.locator('a[href="mailto:clients@pushsms.ru"]').first()
    await expect(emailLink).toBeVisible()
  });

  test('AUTH-P-06: Авторизация с английской локалью', async ({ page }) => {
    // Переходим на английскую версию
    await page.goto('/login?locale=en&skip_captcha=true')
    const testData = generateLoginDataByEmail()
    await page.getByRole('textbox', { name: 'Phone or E-mail' }).fill(testData.email)
    await page.getByRole('textbox', { name: 'Password' }).fill(testData.password)
    await page.getByRole('button', { name: 'Sign in' }).click()

    // Ожидаемый результат: Успешная авторизация, но интерфейс ЛК будет зависеть от locale ЛК
    await expect(page).toHaveURL(/\/front_office\/whatsapp/)
    await expect(page.getByRole('alert')).toContainText('Signed in successfully.', { timeout: 15000 })
  });
});

