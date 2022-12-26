const body = document.querySelector('#middle');
const checkbox_label_cpf = document.getElementById('checkbox_label_cpf');
const checkbox_label_cnpj = document.getElementById('checkbox_label_cnpj');
const checkbox_label_mask = document.getElementById('checkbox_label_mask');
const labels = [checkbox_label_cpf, checkbox_label_cnpj, checkbox_label_mask];

const input = document.getElementById('newCPF');
const checkbox_cpf = document.getElementById('checkbox_cpf');
const checkbox_mask = document.getElementById('checkbox_mask');

const getCPF = async () => {
  input.value = '';
  input.placeholder = 'Gerando CPF...';
  try {
    const promise = await axios.get(
      `https://cpf-generator-api-8nmz.onrender.com/${
        checkbox_cpf.checked ? 'newCPF' : 'newCNPJ'
      }?mask=${checkbox_mask.checked}`
    );
    input.value = promise.data;
    navigator.clipboard.writeText(promise.data);
  } catch (error) {
    console.log(error);
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
