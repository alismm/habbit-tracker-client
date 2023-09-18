import {
  Form as VeeForm,
  Field as VeeField,
  defineRule,
  ErrorMessage,
  configure
} from 'vee-validate'

import {
  required,
  min,
  max,
  alpha_spaces as alphaSpaces,
  email,
  min_value as minVal,
  max_value as maxVal
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)
    app.component('ErrorMessage', ErrorMessage)

    defineRule('required', required)
    defineRule('min_pass', min)
    defineRule('min_name', min)
    defineRule('min_email', min)
    defineRule('max_pass', max)
    defineRule('max_name', max)
    defineRule('max_email', max)
    defineRule('name', alphaSpaces)
    defineRule('email', email)
    defineRule('min_value_age', minVal)
    defineRule('max_value_age', maxVal)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `این فیلد الزامی است.`,
          min_pass: `رمز عبور باید بین ۳ تا ۱۰۰ کاراکتر باشد.`,
          min_email: `ایمیل باید بین ۳ تا ۱۰۰ کاراکتر باشد.`,
          min_name: `نام باید بین ۳ تا ۱۰۰ کاراکتر باشد.`,  
          max_pass: `رمز عبور باید بین ۳ تا ۱۰۰ کاراکتر باشد.`,
          max_email: `ایمیل باید بین ۳ تا ۱۰۰ کاراکتر باشد.`,
          max_name: `نام باید بین ۳ تا ۱۰۰ کاراکتر باشد.`,
          email: `ایمیل وارد شده معتبر نیست.`,
          min_value_age: `سن مجاز ۳ تا ۱۰۰ سال است.`,
          max_value_age: `سن مجاز ۳ تا ۱۰۰ سال است.`,
          name: `نام باید فقط شامل حروف و فاصله باشد.`
        }

        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`

        return message
      }
    })
  }
}
