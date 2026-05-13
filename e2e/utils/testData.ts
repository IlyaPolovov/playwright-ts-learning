import type { RegistrationData, LoginByEmail, LoginByPhone } from '@e2e/types';
export function generateRegistrationData(): RegistrationData {
  return { 
    email: "dmi@pushsms.ru",
    phone: "79888846453",
    password: "ValidPass123!",
    passwordConfirmation: "ValidPass123!",
    agreedToPersonalData: true,
    agreedToOffer: true,
  }
}
export function generateLoginDataByEmail(): LoginByEmail {
  return { 
    email: "dmi@pushsms.ru",
    password: "ValidPass123!",
  }
}
export function generateLoginDataByPhone(): LoginByPhone {
  return { 
    phone: "79888846453",
    password: "ValidPass123!",
  }
}
