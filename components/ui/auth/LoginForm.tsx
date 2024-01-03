import { FC } from 'react'
import CardWrapper from './CardWrapper'

interface LoginFormProps {
  
}

const LoginForm: FC<LoginFormProps> = ({}) => {
  return (

    <CardWrapper headerLabel='Welcome Back!' backButtonHref='/auth/register' backButtonLabel="Don't Have an Account?" showSocial>
      Login Form !
    </CardWrapper>
)
}

export default LoginForm