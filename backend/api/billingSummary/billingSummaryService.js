const _=require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

//criando uma função middleware
function getSummary(req, res){
    //criando pipe line de agregação
    BillingCycle.aggregate({
        $project: {credit: {$sum: "$credits.value"}, debts: {$sum: "$debts.value"}}
    },{
        $group: {_id: null, credit: {$sum: "$credit"}, debts: {$sum: "$debts"}}

    },{
        $project: {_id:0, credit:1, debts:1}
    }, function(error, result){
        if(error){
            res.status(500).json({errors:[error]})
        }else{
            res.json(_.defaults(result[0], {credit:0, debts:0}))
        }
    })
}

module.exports = {getSummary}