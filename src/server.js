const body = document.querySelector('#middle');
const checkbox_label = document.getElementById('checkbox_label');

const input = document.getElementById('newCPF');
const checkbox = document.getElementById('punctuation');

const getCPF = async () => {
  input.value = '';
  input.placeholder = 'Gerando CPF...';
  try {
    const promise = await axios.get(
      `https://cpf-generator-api-8nmz.onrender.com/newCPF?p=${checkbox.checked}`
    );
    input.value = promise.data;
    navigator.clipboard.writeText(promise.data);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector('#light').addEventListener('click', () => {
  body.classList.replace('bg-dark', 'bg-light');
  checkbox.classList.replace('bs-dark', 'bs-light');
  checkbox_label.classList.replace('text-light', 'text-dark');
});
document.querySelector('#dark').addEventListener('click', () => {
  body.classList.replace('bg-light', 'bg-dark');
  checkbox.classList.replace('bs-light', 'bs-dark');
  checkbox_label.classList.replace('text-dark', 'text-light');
});
