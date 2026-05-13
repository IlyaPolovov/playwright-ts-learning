export interface RegistrationData {
    email: string
    phone: string
    password: string
    passwordConfirmation: string
    agreedToPersonalData: boolean
    agreedToOffer: boolean
}


export type BaseAuth = Pick<RegistrationData, 'password'>
export type LoginByEmail = BaseAuth & Pick<RegistrationData, 'email'>
export type LoginByPhone = BaseAuth & Pick<RegistrationData, 'phone'>
// export type LoginForm = 
//   | (BaseAuth & Pick<RegistrationData, 'email'>) 
//   | (BaseAuth & Pick<RegistrationData, 'phone'>)

export type Email = string
export type Phone = string

export interface LoginCredentials {
    username: Email | Phone
    password: string
}

export type ChannelType = 'whatsapp' | 'telegram' | 'max' | 'telegram-bot' | 'sms' | 'vk' | 'ok'

export interface ApiResponse<T> {
  success: boolean
  message?: string
  status: number
  data: T
}

//export type UserResponse = ApiResponse<User>;