/*
* Devan Grose 
* Billy Hinman
*/

var index = 0;
var score = 0;
var questions = [
    {
        'questiontext': 'When pouring juice for your family, you give 1 pint to each person. What scientific measurement are you making?',
        'answers': ['Area','Maxx','Temperature','Volume'],
        'correctanswer':3,
        'checkedIndex': -1,
        'correct': false
    },
    {
        'questiontext': 'A hypothesis:',
        'answers': ['May be correct, partially correct, or incorrect.','Is always wrong.','Is always right.','Should be a random guess'],
        'correctanswer':0,
        'checkedIndex': -1,
        'correct': false
    },
    {
        'questiontext': 'Which of the following is a organ system?',
        'answers': ['Intestine','Heart','Circulatory','Pancreas'],
        'correctanswer':2,
        'checkedIndex': -1,
        'correct': false
    },
    {
        'questiontext': 'Only organisms who are of the same __________________ can reproduce with one another',
        'answers': ['Species','Family','Cell','Kingdom'],
        'correctanswer':0,
        'checkedIndex': -1,
        'correct': false
    }
];
console.log("DOM has loaded beeetch");
function initialize() {
    $('#content').hide();
    $('#next-button').on('click',function(){
        let checkedElem = $('input[name="select"]:checked');
        questions[index].checkedIndex = checkedElem.data('index');
        if(checkedElem.length !=0){
            checkAnswer();
            if(index < questions.length)
                showQuestion(index);
        }
    });
    $('#start-button').on('click',function(){
        index = 0;
        $('#start').hide();
        $('#content').show();
        showQuestion(index);
    });
    $('#back-button').on('click',function(){
        if(index != 0){
            showQuestion(--index);
        }
    });
}
function showQuestion (questionIndex) {
    var question = questions[questionIndex];
    $('#question').text(question.questiontext);
    for(let i = 0; i < 4; i++){
        $('#option' + i).text(question.answers[i]);
        if(i == question.checkedIndex){
            var test = $('#radio' + i).prop('checked',true);
        }
    }
}
function checkAnswer () {
    let checkedElem = $('input[name="select"]:checked');
    checkedElem.prop('checked',false);
    if(checkedElem.data('index') == questions[index].correctanswer && questions[index].correct == false){
        score++;
        questions[index].correct = true;
    }
    if(index == questions.length - 1){
        $('#finished').text('You scored ' + score + ' out of ' + questions.length);
        $('#start').show();
        $('#content').hide();
    }
    else {
        index++;
    }
}
initialize();
