export const validateName = (name) => {
  if (!name) return "El nombre es obligatorio";
  if (name.length < 3) return "Mínimo 3 caracteres";
  return "";
};

export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "El correo es obligatorio";
  if (!regex.test(email)) return "Correo inválido";
  return "";
};

export const validatePassword = (password) => {
  if (!password) return "La contraseña es obligatoria";
  if (password.length < 6) return "Mínimo 6 caracteres";
  return "";
};

export const validateConfirmPassword = (password, confirm) => {
  if (!confirm) return "Confirma la contraseña";
  if (password !== confirm) return "No coinciden";
  return "";
};

export const validatePhone = (phone) => {
  const regex = /^[0-9]{9}$/;
  if (!phone) return "El teléfono es obligatorio";
  if (!regex.test(phone)) return "Debe tener 9 dígitos";
  return "";
};

// 🔥 Fortaleza de contraseña
export const passwordStrength = (password) => {
  if (password.length < 6) return "Débil";
  if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return "Fuerte";
  return "Media";
};