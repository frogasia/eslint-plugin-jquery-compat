const { RuleTester } = require('eslint')

const rules = require('../../../../lib/rules')

const ruleTester = new RuleTester()

ruleTester.run('jquery-compat/no-hover-event', rules['no-hover-event'], {
  valid: [
    {
      code: '$("input#my-input").on("mouseenter mouseleave", function() {})'
    },
    {
      code: '$(".foo").hover()'
    }
  ],
  invalid: [
    {
      code: '$("input#my-input").on("hover", function() {});',
      errors: [{
        messageId: 'no-hover-event'
      }],
      output: '$("input#my-input").on("mouseenter mouseleave", function() {});'
    },
    {
      code: `var event = "hover"
      $("input#my-input").on(event, function() {});`,
      errors: [{
        messageId: 'no-hover-event'
      }],
      output: `var event = "hover"
      $("input#my-input").on("mouseenter mouseleave", function() {});`
    }
  ]
})
