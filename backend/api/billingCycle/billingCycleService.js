const BillingCycle = require('./billingCycle')
/*Criando API Rest*/
BillingCycle.methods(['get', 'post', 'put', 'delete'])
/*Validando as entradas das informações*/
BillingCycle.updateOptions({new:true, runValidators: true})

BillingCycle.route('count', function(req, res, next){
    BillingCycle.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]})
        }else{
            res.json({value})
        }
    })
})

module.exports = BillingCycle