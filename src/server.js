const SPINNER = `<span class="spinner-border spinner-border-sm ms-2 me-2" role="status" aria-hidden="true"></span>`;

const body = document.querySelector('#middle');

const checkbox_label_cpf = document.getElementById('checkbox_label_cpf');
const checkbox_label_cnpj = document.getElementById('checkbox_label_cnpj');
const checkbox_label_mask = document.getElementById('checkbox_label_mask');
const labels = [checkbox_label_cpf, checkbox_label_cnpj, checkbox_label_mask];

const input = document.getElementById('newCPF');

const button = document.getElementById('submit');

const checkbox_cpf = document.getElementById('checkbox_cpf');
const checkbox_cnpj = document.getElementById('checkbox_cnpj');
const checkbox_mask = document.getElementById('checkbox_mask');

const checkboxes_button = [checkbox_cpf, checkbox_cnpj, checkbox_mask, button];

const getCPF = async () => {
  checkboxes_button.forEach((obj) => (obj.disabled = true));
  button.innerHTML = SPINNER;
  input.value = '';
  input.placeholder = 'Gerando CPF/CNPJ valido...';
  try {
    const promise = await axios.get(
      `https://cpf-generator-api-8nmz.onrender.com/${
        checkbox_cpf.checked ? 'newCPF' : 'newCNPJ'
      }?mask=${checkbox_mask.checked}`
    );
    input.value = promise.data;
    navigator.clipboard.writeText(promise.data);
  } catch (error) {
    input.placeholder = 'Novo CPF/CNPJ';
    console.log(error);
  } finally {
    checkboxes_button.forEach((obj) => (obj.disabled = false));
    button.innerHTML = 'Gerar';
  }
};

document.querySelector('#light').addEventListener('click', () => {
  body.classList.replace('bg-dark', 'bg-light');
  labels.forEach((obj) => obj.classList.replace('text-light', 'text-dark'));
});
document.querySelector('#dark').addEventListener('click', () => {
  body.classList.replace('bg-light', 'bg-dark');
  labels.forEach((obj) => obj.classList.replace('text-dark', 'text-light'));
});
