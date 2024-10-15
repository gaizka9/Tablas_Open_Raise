const preguntas = document.querySelector('.preguntas');
preguntas.innerHTML = `
        <div id="pregunta"></div>
            <div class="quiz-options">
                <button class="btn btn-primary quiz-option" data-answer="raise">Raise</button>
                <button class="btn btn-primary quiz-option" data-answer="limp">Limp</button>
                <button class="btn btn-primary quiz-option" data-answer="bluff">Bluff</button>
                <button class="btn btn-primary quiz-option" data-answer="fold">Fold</button>
            </div>`;