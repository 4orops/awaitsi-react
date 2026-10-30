export const testData = {
  validContact: {
    name: 'Sipho Ndlovu',
    email: 'sipho@example.co.za',
    phone: '+27821234567',
    projectType: 'Web Development',
    message: 'We are looking to build a custom web application for our logistics operations.'
  },
  invalidContact: {
    emptyName: '',
    invalidEmail: 'not-an-email',
    shortPhone: '123',
    emptyMessage: ''
  },
  xssContact: {
    name: '<script>alert("XSS")</script>',
    email: 'test@example.com',
    message: '<img src=x onerror=alert(1)>'
  },
  extremelyLongInput: {
    name: 'A'.repeat(500),
    email: 'longemail_' + 'a'.repeat(200) + '@example.com',
    message: 'B'.repeat(5000)
  },
  validQuote: {
    projectType: 'Website Development',
    businessStage: "I'm growing & need better systems",
    name: 'Jane Doe',
    email: 'jane@company.co.za',
    phone: '+27839876543',
    budget: 'R15k - R50k',
    description: 'Automate internal workflows and client portal.'
  }
};
