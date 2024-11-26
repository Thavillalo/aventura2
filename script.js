document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.btn-proximo'); // Seleciona todos os botões
    const passos = document.querySelectorAll('.passo'); // Seleciona todas as etapas (passos)

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const nextStepId = this.getAttribute('data-proximo'); // Pega o próximo passo do botão clicado
            const currentStep = document.querySelector('.passo.ativo'); // Encontra o passo atual

            if (currentStep) {
                currentStep.classList.remove('ativo'); // Remove a classe 'ativo' do passo atual
            }

            const nextStep = document.getElementById('passo-' + nextStepId); // Encontra o próximo passo
            if (nextStep) {
                nextStep.classList.add('ativo'); // Adiciona a classe 'ativo' no próximo passo
            }
        });
    });
});
