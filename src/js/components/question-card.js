import Alert from './alert';
import getRefs from '../get-refs';
import getSvgSpriteUrl from '../get-svg-sprite-url';

const refs = getRefs();
const svgSpriteUrl = getSvgSpriteUrl();
const alert = new Alert({
  selector: '.js-alert',
});

export default class QuestionCard {
  constructor() {}

  // * Логика добавления нового вопроса
  renderNewQuestion(qId) {
    const markup = `
	<div class="card rounded-top p-4 mb-3" id="${qId}">
		  <div class="row">
			<div class="col-md-6 mb-3">
			  <label class="form-label" for="${qId}-label"> Запитання </label>
			  <input
				class="form-control"
				type="text"
				name="${qId}"
				id="${qId}-label"
				placeholder="Хто президент України ?"
			  />
			</div>
  
			<div class="col-md-6 mb-3">
			  <label class="form-label" for="${qId}-answer-type">Тип відповіді</label>
			  <select
				class="form-select js-form-select"
				id="${qId}-answer-type"
				name="${qId}AnswerType"
			  >
				<option value="radio" selected>Один зі списку</option>
				<option value="checkbox">Декілька зі списку</option>
				<option value="text">текст (рядок)</option>
				<option value="textarea">текст (абзац)</option>
			  </select>
			</div>
		  </div>
  
		  <div class="mb-3" id="answers-container">
			<div class="input-group w-100 mb-3 align-items-center">
			  <svg class="" width="22" height="22">
				<use href="${svgSpriteUrl.pathname}#circle"></use>
			  </svg>
  
			  <input
				type="text"
				class="form-control ms-2"
				name="${qId}Answer1"
				value="Варіант 1"
			  />
  
			  <button
				class="action-button"
				type="button"
				aria-label="select correct answer"
				data-action="select-correct-answer"
			  >
				<svg class="action-button__icon">
				  <use href="${svgSpriteUrl.pathname}#check"></use>
				</svg>
			  </button>
			  <button
				class="action-button"
				type="button"
				aria-label="remove answer"
				data-action="remove-answer"
			  >
				<svg class="action-button__icon">
				  <use href="${svgSpriteUrl.pathname}#x-lg"></use>
				</svg>
			  </button>
			</div>
  
			<div class="input-group w-100 mb-3 align-items-center">
			  <svg class="" width="22" height="22">
				<use href="${svgSpriteUrl.pathname}#circle"></use>
			  </svg>
  
			  <input
				type="text"
				class="js-disabled-form-control form-control ms-2 disabled text-secondary"
				name="${qId}Answer2Disabled"
				value="Додати варіант"
			  />
			</div>
		  </div>
  
		  <hr />
  
		  <!-- Видалити запитання -->
		  <button
			class="action-button ms-auto"
			type="button"
			aria-label="delete question"
			data-action="delete-question"
			question-id="${qId}"
		  >
			<svg class="action-button__icon" question-id="${qId}">
			  <use href="${svgSpriteUrl.pathname}#trash-fill" question-id="${qId}"></use>
			</svg>
		  </button>
		</div>
  
		</div>
		</div>
	`;

    refs.addQuestionBtn.insertAdjacentHTML('beforebegin', markup);
  }

  // * Логика удаления вопроса
  removeQuestionById(qId) {
    const questionCard = document.querySelector(`.card[id="${qId}"]`);
    questionCard.classList.add('is-removed');

    setTimeout(() => {
      questionCard.remove();

      alert.show();
      // alert.refs.alert.addEventListener(
      //   'mouseenter',
      //   alert.onMouseEnter.bind(alert)
      // );
      // alert.refs.alert.addEventListener(
      //   'mouseleave',
      //   alert.onMouseLeave.bind(alert)
      // );
    //   alert.refs.button.addEventListener('click', evt => {
    //     alert.retrieveQuestionById(qId);
    //   });
    }, 250);
  }

  updateQuesionsId() {}

  retrieveQuestionById(qId) {
    console.log('retrieveQuestionById', qId);
    const removedQuestionRef = document.querySelector(`.card[id="${qId}"]`);
    console.log('removedQuestionRef', removedQuestionRef);
  }
}
