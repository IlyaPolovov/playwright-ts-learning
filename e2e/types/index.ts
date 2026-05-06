export interface RegistrationData {
    email: string
    phone: string
    password: string
    passwordConfirmation: string
    agreedToPersonalData: boolean
    agreedToOffer: boolean
}

export type Email = string
export type Phone = string

export interface LoginCredentials {
    username: Email | Phone
    password: string
}

export type ChannelType = 'whatsapp' | 'telegram' | 'max' | 'telegram-bot' | 'sms'
