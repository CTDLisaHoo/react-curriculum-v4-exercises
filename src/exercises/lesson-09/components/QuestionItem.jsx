import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

export function QuestionItem({ question }) {
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);

  const [workingOptions, setWorkingOptions] = useState(question.options);
  const isEditing = state.ui.editingQuestionId === question.id;

  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  const handleEdit = () => {
    setWorkingText(question.question);
    setWorkingOptions(question.options);

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: question.id,
      },
    });
  };

  const handleSave = () => {
    const newText = workingText.trim();

    if (!newText) {
      return;
    }

    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText,
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: null,
      },
    });
  };

  const handleCancel = () => {
    setWorkingText(question.question);
    setWorkingOptions(question.options);

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: null,
      },
    });
  };

  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );

    if (confirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: {
          id: question.id,
        },
      });
    }
  };

  const handleOptionChange = (optionIndex, newText) => {
    const updatedOptions = [...workingOptions];

    updatedOptions[optionIndex] = newText;

    setWorkingOptions(updatedOptions);
  };

  const handleOptionSave = (optionIndex) => {
    const newText = workingOptions[optionIndex].trim();

    if (!newText) {
      return;
    }

    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex,
        newText,
      },
    });
  };

  const handleOptionDelete = (optionIndex) => {
    if (question.options.length <= 2) {
      return;
    }

    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex,
      },
    });

    const updatedOptions = workingOptions.filter(
      (_, index) => index !== optionIndex
    );

    setWorkingOptions(updatedOptions);
  };

  const handleAddOption = () => {
    const optionText = window.prompt('Enter a new option:');

    if (!optionText || !optionText.trim()) {
      return;
    }

    const newOption = optionText.trim();

    dispatch({
      type: 'ADD_OPTION_TO_QUESTION',
      payload: {
        questionId: question.id,
        optionText: newOption,
      },
    });

    setWorkingOptions([...workingOptions, newOption]);
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>

        <div className={styles['question-actions']}>
          {isEditing ? (
            <button className={styles['edit-btn']} onClick={handleCancel}>
              Cancel
            </button>
          ) : (
            <button className={styles['edit-btn']} onClick={handleEdit}>
              Edit
            </button>
          )}

          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className={styles['question-content']}>
          <input
            type="text"
            value={workingText}
            onChange={(event) => setWorkingText(event.target.value)}
          />

          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className={styles['question-content']}>
          <h3>{question.question}</h3>
        </div>
      )}

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>

          <ul>
            {workingOptions.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={option}
                      onChange={(event) =>
                        handleOptionChange(index, event.target.value)
                      }
                    />

                    <button onClick={() => handleOptionSave(index)}>
                      Save
                    </button>

                    <button
                      onClick={() => handleOptionDelete(index)}
                      disabled={workingOptions.length <= 2}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <span>{option}</span>
                )}
              </li>
            ))}
          </ul>

          {isEditing && <button onClick={handleAddOption}>+ Add Option</button>}
        </div>
      )}
    </div>
  );
}
