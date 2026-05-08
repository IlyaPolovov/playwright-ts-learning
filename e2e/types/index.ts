export interface RegistrationData {
    email: string
    phone: string
    password: string
    passwordConfirmation: string
    agreedToPersonalData: boolean
    agreedToOffer: boolean
}

export type LoginForm = Pick<RegistrationData, 'email' | 'phone' | 'password'>

export type Email = string
export type Phone = string

export interface LoginCredentials {
    username: Email | Phone
    password: string
}

export type ChannelType = 'whatsapp' | 'telegram' | 'max' | 'telegram-bot' | 'sms' | 'vk'

export interface ApiResponse<T> {
  success: boolean
  message?: string
  status: number
  data: T
}

export type UserResponse = ApiResponse<User>;