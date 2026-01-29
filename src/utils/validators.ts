// =========================
// EMAIL
// =========================
export const validateEmail = (value: string): string => {
  if (!value) return 'Required!';
  if (value.includes(' ')) return 'Space is not allowed!';

  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(value)) return 'Email is not correct!';

  return '';
};

// =========================
// PASSWORD
// =========================
export const validatePassword = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 8) return 'Must be at least 8 characters!';

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

  if (!passwordRegex.test(value))
    return 'Must have Upper, Lower, Number & Special Character';

  return '';
};

// =========================
// OTP
// =========================
export const validateOTP = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 6) return 'Code is not complete!';
  return '';
};

// =========================
// NEW PASSWORD
// =========================
export const validateNewPassword = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 8) return 'Must be at least 8 characters!';
  return '';
};

// =========================
// CONFIRM PASSWORD
// =========================
export const validateConfirmPassword = (
  value: string,
  originalPassword: string
): string => {
  if (!value) return 'Required!';
  if (value.length < 8) return 'Must be at least 8 characters!';
  if (value !== originalPassword) return 'Password did not match';
  return '';
};

// =========================
// FIRST NAME
// =========================
export const validateFirstName = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 2) return 'Must be at least 2 characters!';

  const nameRegex = /^[A-Za-z\s'-]+$/;
  if (!nameRegex.test(value)) return 'First Name is not correct!';

  return '';
};

// =========================
// LAST NAME
// =========================
export const validateLastName = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 2) return 'Must be at least 2 characters!';

  const nameRegex = /^[A-Za-z\s'-]+$/;
  if (!nameRegex.test(value)) return 'Last Name is not correct!';

  return '';
};

// =========================
// PHONE NUMBER
// =========================
export const validatePhoneNumber = (value: string): string => {
  if (!value) return 'Required!';

  const phoneRegex =
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;

  if (!phoneRegex.test(value))
    return 'Phone Number is not correct';

  return '';
};

// =========================
// COMPANY ID
// =========================
export const validateCompanyId = (value: string): string => {
  if (!value) return 'Required!';
  return '';
};

// =========================
// COMPANY NAME
// =========================
export const validateCompanyName = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 2) return 'Must be at least 2 characters!';

  const companyRegex = /^[A-Za-z0-9\s'-]+$/;
  if (!companyRegex.test(value))
    return 'Company Name is not correct!';

  return '';
};

// =========================
// DESCRIPTION
// =========================
export const validateDescription = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 10)
    return 'Must be at least 10 characters!';
  return '';
};

// =========================
// COMPANY ADDRESS
// =========================
export const validateCompanyAddress = (value: string): string => {
  if (!value) return 'Required!';
  if (value.length < 2) return 'Must be at least 2 characters!';

  const addressRegex = /^[A-Za-z0-9\s,'-]+$/;
  if (!addressRegex.test(value))
    return 'Company Address is not correct!';

  return '';
};
