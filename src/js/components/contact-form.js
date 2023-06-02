const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const inputEmail = document.getElementById('email');
const submitFormBtn = document.getElementById('submit');
const form = document.getElementById('form');

const inputModalName = document.getElementById('modal-name');
const inputModalPhone = document.getElementById('modal-phone');
const inputModalEmail = document.getElementById('modal-email');
const submitModalFormBtn = document.getElementById('js-modal-submit')
const formModal = document.querySelector('.js-modal-form');

const formData = new FormData();


function checkSubmit(name, email, phone, btn) {
  if (!name.value || !email.value || !phone.value) {
    btn.setAttribute('disabled', '');
    btn.classList.add('_disabled');
  } else {
    btn.removeAttribute('disabled');
    btn.classList.remove('_disabled');
  }
}

function submittingForm(form) {
  const inputs = form.querySelectorAll('.form__input')

  for (let input of inputs) {
    input.classList.add('disabled');
    input.setAttribute('readonly', '');
  }

  submitFormBtn.classList.add('disabled');
}

function removeReadonlyAttr(form) {
  const inputs = form.querySelectorAll('.form__input')

  for (let input of inputs) {
    input.classList.remove('disabled');
    input.removeAttribute('readonly');
  }
}

const validateForm = new window.JustValidate(
  '#form',
  {
    errorFieldCssClass: '_error',
    errorLabelStyle: {
      color: '#FF0000',
    },
    lockForm: true,
    focusInvalidField: true,
    validateBeforeSubmitting: true,
  }
);

const validateModalForm = new window.JustValidate(
  '#modal-form',
  {
    errorFieldCssClass: '_error',
    errorLabelStyle: {
      color: '#FF0000',
    },
    lockForm: true,
    focusInvalidField: true,
    validateBeforeSubmitting: true,
  }
);

validateForm
  .addField('#name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    }
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'maxLength',
      value: 12,
      errorMessage: 'Неверный формат телефона'
    }
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат почты',
    }
  ]);

validateModalForm
  .addField('#modal-name', [
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Имя слишком короткое',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Имя слишком длинное',
    },
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    }
  ])
  .addField('#modal-phone', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'maxLength',
      value: 12,
      errorMessage: 'Неверный формат телефона'
    }
  ])
  .addField('#modal-email', [
    {
      rule: 'required',
      errorMessage: 'Обязательное поле',
    },
    {
      rule: 'email',
      errorMessage: 'Неверный формат почты',
    }
  ]);

async function sendForm(e, form) {
  e.preventDefault();

  const inputs = form.querySelectorAll('.form__input')

  for (let [index, input] of inputs.entries()) {
    formData.set(input.name, input.value);
  }

  submittingForm(form);

  const token = '6197694453:AAGpGVSQBlyFEBAEWAimnCKEofdzujQegsY';
  const chatId = '-907938655';

  const asString = new URLSearchParams(formData).toString();
  const headerMessage = 'Заявка с ypacrew.tech %0A';

  const message = headerMessage + asString.replaceAll('=', ': ').replaceAll('&', '%0A');

  const botUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${message}`

  const response = await fetch(botUrl, {
    method: 'POST',
    body: formData,
  });


  if (response.ok) {
    showModal(modalSuccess);
    form.reset();
    closeModal(modalForm);
  }

  removeReadonlyAttr(form);
  checkSubmit(inputName, inputEmail, inputPhone, submitFormBtn);
  checkSubmit(inputModalName, inputModalEmail, inputModalPhone, submitModalFormBtn);
}

window.addEventListener('DOMContentLoaded', (event) => {
  [inputPhone, inputModalPhone].forEach((input) => input.type = window.innerWidth > 992 ? 'number' : 'tel');


  checkSubmit(inputName, inputEmail, inputPhone, submitFormBtn);
  form.addEventListener('input', () => {
    checkSubmit(inputName, inputEmail, inputPhone, submitFormBtn);
  });

  form.addEventListener('submit', () => sendForm(event, form));



  checkSubmit(inputModalName, inputModalEmail, inputModalPhone, submitModalFormBtn);
  formModal.addEventListener('input', () => {
    checkSubmit(inputModalName, inputModalEmail, inputModalPhone, submitModalFormBtn);
  });
  formModal.addEventListener('submit', () => sendForm(event, formModal));
});