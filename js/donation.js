
var giftAmount = 0;
var predefinedAmounts = {A: 0, B:0, C:0, D:0};
var giveMonthlyBoolean = false;
var currentStep = 1;

function stepOne() {
    $('.step_wrap').removeClass('shown');
    $('#stepOne').addClass('shown');
    $('#formHeader').html('Choose amount to give');
    currentStep = 1;
}

function stepTwo() {
    $('.step_wrap').removeClass('shown');
    $('#stepTwo').addClass('shown');
    $('#formHeader').html('Tell us who you are');
    currentStep = 2;
}

function stepThree() {
    $('.step_wrap').removeClass('shown');
    $('#stepThree').addClass('shown');
    $('#formHeader').html('How would you like to pay?');
    currentStep = 3;
}

function payWithCard() {
    $('.payment_wrap').removeClass('shown');
    $('#cardDetails').addClass('shown');
    $('#payment_methods>a').removeClass('active');
    $('#with_card').addClass('active');
    $('#donateButton').removeAttr('disabled');
    $('#method').val('card');
}

function payWithDirectDebit() {
    $('.payment_wrap').removeClass('shown');
    $('#bankDetails').addClass('shown');
    $('#payment_methods>a').removeClass('active');
    $('#with_bank').addClass('active');
    $('#donateButton').removeAttr('disabled');
    $('#method').val('bank');
}

function payWithPayPal() {
    $('.payment_wrap').removeClass('shown');
    $('#paypalButton').addClass('shown');
    $('#payment_methods>a').removeClass('active');
    $('#with_paypal').addClass('active');
    $('#donateButton').attr('disabled','disabled');
    $('#method').val('paypal');
}

function process() {
    console.log('process');
}

function giveOnce() {
    giveMonthlyBoolean = false;
    predefinedAmounts = {A:25, B:50, C:100, D:250};

    $('#giveMonthlyLink').removeClass('active');
    $('#giveOnceLink').addClass('active');
    $('#hidden_giving').val('once');

    amountChecked();
}

function amountChecked(is_other) {
    $('#stepOne>label').removeClass('checked');

    $('#amountA').html('&dollar; ' + predefinedAmounts.A + (giveMonthlyBoolean ? '/mo' : ''));
    $('#amountB').html('&dollar; ' + predefinedAmounts.B + (giveMonthlyBoolean ? '/mo' : ''));
    $('#amountC').html('&dollar; ' + predefinedAmounts.C + (giveMonthlyBoolean ? '/mo' : ''));
    $('#amountD').html('&dollar; ' + predefinedAmounts.D + (giveMonthlyBoolean ? '/mo' : ''));

    if (predefinedAmounts.A == giftAmount) $('#amountA').addClass('checked');
    if (predefinedAmounts.B == giftAmount) $('#amountB').addClass('checked');
    if (predefinedAmounts.C == giftAmount) $('#amountC').addClass('checked');
    if (predefinedAmounts.D == giftAmount) $('#amountD').addClass('checked');


}


function giveMonthly() {
    giveMonthlyBoolean = true;
    predefinedAmounts = {A:10, B:25, C:50, D:100};

    $('#giveOnceLink').removeClass('active');
    $('#giveMonthlyLink').addClass('active');
    $('#hidden_giving').val('monthly');

    amountChecked();
}

function setAmount(amount, is_other) {
    giftAmount = amount;
    amountChecked(is_other);
    $('#gift_amount').val(amount);
}

$(document).ready(function () {

// other amount
    $('.amount_other').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('hidden');
        $(this).next('.input_otheramount_holder').addClass('active');
        $(this).parent().find('label').removeClass('checked');
        $(this).parent().find('.input_otheramount_holder input').focus();
        $(this).parent().find('input[type="radio"]').prop('checked', false);
    });

    $('#amountA').click(function(){
        setAmount(predefinedAmounts.A);
    });
    $('#amountB').click(function(){
        setAmount(predefinedAmounts.B);
    });
    $('#amountC').click(function(){
        setAmount(predefinedAmounts.C);
    });
    $('#amountD').click(function(){
        setAmount(predefinedAmounts.D);
    });

    $('#otherAmount').change(function(){
        setAmount($(this).val(), true);
    });

    $('#otherAmount').keyup(function(){
        setAmount($(this).val(), true);
    });



    setAmount(50);
    giveOnce();
    stepOne();
    payWithCard();

});


