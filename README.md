# Codecademy Frontend Takehome: Multiple Choice Quizzes

👋 Hi there!
Thanks for taking the time to work on a frontend takehome assignment.
We really appreciate you applying to work at Codecademy!

This README.md details the prompt for your assignment.
Rest assured, we won't use the code for anything other than as part of your application.

You can see the competencies we'll be grading it on [here](https://github.com/Codecademy/engineering-competencies/blob/master/interviews/frontend-takehome.md). We expect this to take you roughly 2-3 hours. Please let us know if there's anything unclear about it!

> We recommend copy & pasting these instructions into https://dillinger.io/ to view them as formatted text.

This README.md details the prompt for your assignment.
Rest assured, we won't use the code for anything other than as part of your application.

For your convenience, we've placed these instructions on [GitHub](https://github.com/Codecademy/internship-code-challenge/tree/master/frontend) and [Codesandbox](https://codesandbox.io/s/multiple-choice-quiz-intern-frontend-takehome-l93ce).
Please submit using a Codesandbox fork.

## The Situation

Codecademy needs an embeddable `MultipleChoiceQuiz` widget to help learners evaluate their skills.
It should be viewable on both wide ("desktop") and narrow ("mobile") screens.

You're an engineer at Codecademy and tasked with building it.
Hooray! 🎉

See `./mockups/*.png` for rough descriptions of what it should look like.

> Don't bother getting your page exactly like our mockups -- just match the general layout. We're not interested in pixel perfect formatting.

### What You're Given

Your application code should live in the `src/` directory. We've set it up to work with React, though you're welcome to add other libraries if you need.

In the `src/quizzes.js` file, we've exported for you a set of `quizzes`, each of which contains the following data:

- `title`: A human-readable display text title for the quiz

- `questions` An ordered list of questions to be asked, each of which consists of:
  - `text`
  - `correctAnswer`
  - `incorrectAnswers`

### Feature Requirements

Your code will allow the user to take each of those `quizzes` in order.

1. Create a `MultipleChoiceQuiz` component that takes in a quiz as a prop, displays its title on top of the page, and displays a single question’s text and randomly ordered answers, starting with the first question.

2. When a question’s answer is clicked, it should show:

   - A ‘Next’ button at the bottom of the component
   - Either _'Correct!ƒ'_ or _'Incorrect...'_ above that button, with the correct answer outlined in green, and the incorrect answer (if any) outlined in red with a ~~strikethrough~~ over its text

3. After all questions have been answered correctly, display a friendly summary screen that lists:
   - How many questions were in the quiz
   - How many of those questions were answered correctly
   - A button to move to the next quiz (or the first quiz, if they just took the last)
   - A random encouragement message _(use `getMessage` from `src/messages.js`)_.

### Delighters

In addition to the base requirements, we'll need you to pick and complete _one_ of the following "delighter" fun features.
We do mean _one_: completing additional features will _not_ gain you points!

- A: Display a progress bar on the bottom of the component. It should fill in with green from the left for the percentage of questions correctly answered, then red for the percentage of questions answered incorrectly, then white for the remaining not-yet-answered questions.
- B: After all questions have been answered, any questions that were answered incorrectly should be asked again, in their original order, repeating until all answers are answered correctly. The summary screen should say how many questions were answered correctly on the first try.
- C: Animate from one question to another with some kind of animation.

See `./mockups/delighters/*.png` for rough descriptions of what A and B would look like.
