import { notification } from 'antd'

export const showErrorMsg = async (
   message,
   description,
   { duration = 5, placement = 'topLeft' } = {},
) => {
   notification.error({
      message,
      description,
      duration,
      placement,
   })
}

export const showSuccessMsg = async (
   message,
   description,
   { duration = 5, placement = 'topLeft' } = {},
) => {
   notification.success({
      message,
      description,
      duration,
      placement,
   })
}

export const showInfoMsg = async (
   message,
   description,
   { duration = 5, placement = 'topLeft' } = {},
) => {
   notification.info({
      message,
      description,
      duration,
      placement,
   })
}

export const showWarningMsg = async (
   message,
   description,
   { duration = 5, placement = 'topLeft' } = {},
) => {
   notification.warning({
      message,
      description,
      duration,
      placement,
   })
}
